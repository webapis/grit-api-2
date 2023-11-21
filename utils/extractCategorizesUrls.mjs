//extractCategorizesUrls db.json

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

const fs =require('fs')
const path =require('path')
const db = require('../db.json')
const categorizedData={}
debugger

for(let brand in db){

    const brandData =db[brand]

    const categorised = brandData.filter(f=>f.gender)
    if(categorised.length>0){
        categorizedData[brand]=categorised
    }
    debugger;
}
fs.writeFileSync(path.join(`${process.cwd()}`, 'dbCategorized.json'), JSON.stringify(categorizedData))




