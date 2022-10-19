import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';


fetch('https://www.fishwatch.gov/api/species')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./fishes.json", JSON.stringify(data)))
  .catch(error=> console.error(error))