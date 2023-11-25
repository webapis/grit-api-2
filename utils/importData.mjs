import algoliasearch from "algoliasearch";
import { createRequire } from "module";
import path from "path";
import fs from "fs";
import walkSync from "./walkSync.mjs";
import orderData from "./orderData.mjs";
const require = createRequire(import.meta.url);
import mapPrice from "./mapPrice.mjs";
require("dotenv").config();

const client = algoliasearch("7JF244QSZZ", process.env.ALGOLIAKEY);

function setSettings(index) {
  return new Promise((resolve, reject) => {
    try {
      index
        .setSettings({
          attributeForDistinct: "prodId",
          distinct: true,
        })
        .then(() => {
          return resolve(true);
        });
    } catch (error) {
      return reject(error);
    }
  });
}
async function importData({ gender }) {

  const index = client.initIndex(gender);
  await setSettings(index)
  index.clearObjects()
  let data = [];
  let filepathes = [];
  walkSync(path.join(process.cwd(), `temp-${gender}/unzipped-data`), (filepath) => {
    filepathes.push(filepath);
  });
  for (let file of filepathes) {
    const jsonData = fs.readFileSync(file);
    const objectData = JSON.parse(jsonData).map((m) => {
      return {

        ...m,
        price: m.priceNew ? mapPrice(m.priceNew.toString()) : 0,

      };
    });

    data = [...data, ...objectData];
  }
const orderedData =orderData(data)
const sequencialized = orderedData.map((m,i)=>{return{ ...m,o:i}})
debugger
  index.saveObjects(sequencialized, { autoGenerateObjectIDIfNotExist: true });

}

importData({ gender: 'all' })
