import mongoose from "mongoose";

const awardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  imgURL: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
  },
});

export const User = mongoose.model("Award", awardSchema);
