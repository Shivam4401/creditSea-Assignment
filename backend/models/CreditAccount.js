import mongoose from "mongoose";

const creditAccountSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BasicDetail",
      required: true, // link account to a user
    },
    accountType: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    address: String,
    accountNumber: {
      type: String,
      required: true,
      unique: true,
    },
    amountOverdue: {
      type: Number,
      default: 0,
    },
    currentBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const CreditAccount = mongoose.model("CreditAccount", creditAccountSchema);

export default CreditAccount;
