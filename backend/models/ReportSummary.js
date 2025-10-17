import mongoose from "mongoose";

const reportSummarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BasicDetail",
      required: true,
      unique: true, // one summary per user
    },
    totalAccounts: { type: Number, default: 0 },
    activeAccounts: { type: Number, default: 0 },
    closedAccounts: { type: Number, default: 0 },
    currentBalance: { type: Number, default: 0 },
    securedAmount: { type: Number, default: 0 },
    unsecuredAmount: { type: Number, default: 0 },
    last7DaysEnquiries: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ReportSummary = mongoose.model("ReportSummary", reportSummarySchema);

export default ReportSummary;
