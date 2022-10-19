import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Fish = new Schema({
  speciesName: String,
  calories: String,
  color: String,
  totalFat: String,
  protein: String,
  servingWeight: String,
  taste: String,
  texture: String,
  imgUrl: { type: Schema.Types.String, ref: 'Image' }
});

export default mongoose.model("fishes", Fish)