import BasicDetail from "../models/BasicDetail.js";
import CreditAccount from "../models/CreditAccount.js";
import ReportSummary from "../models/ReportSummary.js";

export const getReport = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await BasicDetail.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const reportSummary = await ReportSummary.findOne({ user: userId });
    const creditAccounts = await CreditAccount.find({ user: userId });

    res.status(200).json({
      basicDetails: user,
      reportSummary,
      creditAccounts,
    });
  } catch (error) {
    console.error("Error fetching report:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch report", error: error.message });
  }
};
