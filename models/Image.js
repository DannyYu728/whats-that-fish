import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Image = new Schema({
  speciesName: String,
  altName: String,
  imgUrl: String,
});

export default mongoose.model("images", Image)