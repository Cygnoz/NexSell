const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema(
  {
    image: { type: String }, // URL or path to the image
    expenseName: { type: String},
    date: { type: Date },
    expenseAccount: { type: String },
    amount: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category" }, // References the Category collection
    note: { type: String },
    status: { type: String },
    approvalDate: { type: String },
    approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rejectedDate: { type: String },
    rejectedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
