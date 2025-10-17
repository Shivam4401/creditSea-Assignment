import mongoose from "mongoose";

const basicDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    pan: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple nulls
      default: null, // Default to null if not provided
    },
    creditScore: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const BasicDetail = mongoose.model("BasicDetail", basicDetailSchema);

export default BasicDetail;
