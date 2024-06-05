import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    hobi: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    nomor_telp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const post = mongoose.model("post", postSchema);
export default post;
