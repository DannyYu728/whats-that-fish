import mongoose from "mongoose";
import db from "../db/connection.js";
import Fish from "../models/Fish.js";
import Image from "../models/Image.js";


let updateData = async () => {
  let images = await Image.find({});

  images.forEach(async (image) => {
    await Fish.updateMany(
      { speciesName: image.speciesName },
      { $set: { imgUrl: image.imgUrl } }
      // { $set: { altName: image.altName } }
    );
  });
};

updateData()