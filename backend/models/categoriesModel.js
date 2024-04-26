import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

export const User = mongoose.model("Category", categoriesSchema);
