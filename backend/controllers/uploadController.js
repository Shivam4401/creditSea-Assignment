import fs from "fs";
import xml2js from "xml2js";
import BasicDetail from "../models/BasicDetail.js";
import CreditAccount from "../models/CreditAccount.js";
import ReportSummary from "../models/ReportSummary.js";

export const uploadXML = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const xmlData = fs.readFileSync(req.file.path, "utf-8");
    const parser = new xml2js.Parser({ explicitArray: false });
    const result = await parser.parseStringPromise(xmlData);

    const root = result.INProfileResponse;

    // basic details
    const applicant =
      root?.Current_Application?.Current_Application_Details
        ?.Current_Applicant_Details || {};
    const firstAccount =
      root?.CAIS_Account?.CAIS_Account_DETAILS?.[0] ||
      root?.CAIS_Account?.CAIS_Account_DETAILS;

    let pan = firstAccount?.CAIS_Holder_ID_Details?.Income_TAX_PAN || null;
    if (pan === "N/A") pan = null; // convert N/A to null

    const creditScore = Number(root?.SCORE?.BureauScore || 0);

    // Upsert BasicDetail
    const user = await BasicDetail.findOneAndUpdate(
      { pan }, // filter by PAN
      {
        name: `${applicant.First_Name || ""} ${
          applicant.Last_Name || ""
        }`.trim(),
        mobile:
          applicant.MobilePhoneNumber ||
          firstAccount?.CAIS_Holder_Phone_Details?.Telephone_Number ||
          "N/A",
        pan,
        creditScore,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // report summary
    const summary = root?.CAIS_Account?.CAIS_Summary || {};
    const creditAcc = summary?.Credit_Account || {};
    const totalOutstanding = summary?.Total_Outstanding_Balance || {};

    await ReportSummary.findOneAndUpdate(
      { user: user._id }, // filter by user
      {
        totalAccounts: Number(creditAcc.CreditAccountTotal) || 0,
        activeAccounts: Number(creditAcc.CreditAccountActive) || 0,
        closedAccounts: Number(creditAcc.CreditAccountClosed) || 0,
        currentBalance: Number(totalOutstanding.Outstanding_Balance_All) || 0,
        securedAmount:
          Number(totalOutstanding.Outstanding_Balance_Secured) || 0,
        unsecuredAmount:
          Number(totalOutstanding.Outstanding_Balance_UnSecured) || 0,
        last7DaysEnquiries:
          Number(root?.TotalCAPS_Summary?.TotalCAPSLast7Days) || 0,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // credit accounts
    const accounts = root?.CAIS_Account?.CAIS_Account_DETAILS || [];
    const accountList = Array.isArray(accounts) ? accounts : [accounts];

    for (const acc of accountList) {
      await CreditAccount.findOneAndUpdate(
        { accountNumber: acc.Account_Number || "N/A" }, // filter by accountNumber
        {
          user: user._id,
          accountType: acc.Portfolio_Type || "N/A",
          bankName: acc.Subscriber_Name?.trim() || "N/A",
          address:
            acc.CAIS_Holder_Address_Details
              ?.First_Line_Of_Address_non_normalized || "N/A",
          accountNumber: acc.Account_Number || "N/A",
          amountOverdue: Number(acc.Amount_Past_Due) || 0,
          currentBalance: Number(acc.Current_Balance) || 0,
        },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    fs.unlinkSync(req.file.path);

    res.status(200).json({
      message: "XML processed successfully!",
      userId: user._id,
    });
  } catch (err) {
    console.error("Full backend error stack:");
    console.error(err);
    return res.status(500).json({ error: err.message, stack: err.stack });
  }
};
