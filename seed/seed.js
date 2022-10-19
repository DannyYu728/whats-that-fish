import db from "../db/connection.js";
import Fish from "../models/Fish.js";
import Image from "../models/Image.js";
import fishes from "./fishes.json" assert { type: "json" };
import images from "./images.json" assert { type: "json" };

let filter = (strings) => {
  const [string] = [strings];
  const exclude = ['<p>', '</p>', '&nbsp'];
  let res = null;
  
  if (string == null) {
  return res
  } else {
    res = exclude.reduce((str, word) => 
      str.replaceAll(word, ''), string).replaceAll(/\s+/g, ' ');
    return res
  }
}

let imagesData = images.map((image) => {
  return {
    speciesName: image.speciesName,
    imgUrl: image.imgUrl
  }
});

let fishesData = fishes.map((fish) => {
  return {
    speciesName: fish["Species Name"],
    calories: fish.Calories,
    color: filter(fish.Color),
    totalFat: fish["Fat, Total"],
    protein: fish.Protein,
    servingWeight: fish["Serving Weight"],
    taste: filter(fish.Taste),
    texture: filter(fish.Texture),
    imgUrl: ""
  }
});

const insertData = async () => {
  await db.dropDatabase();
  await Image.create(imagesData)
  await Fish.create(fishesData)

  console.log(fishes.length)

  db.close();
}

insertData();