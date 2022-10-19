import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Image = new Schema({
  speciesName: String,
  imgUrl: String,
});

export default mongoose.model("images", Image)