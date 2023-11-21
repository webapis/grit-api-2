//extract categorizedNav nav db.json
//extract alt kategori nav db.json

import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("dotenv").config();

 const fs =require('fs')
 const path =require('path')
const db = require('../dbCategorized.json')
const categorizedNav = {}
// debugger

for (let brand in db) {

    const brandData = db[brand]
 
    for (let d of brandData) {
    
        if (!categorizedNav[d.kategori]) {
            categorizedNav[d.kategori] = { }
        }
      
        if (!categorizedNav[d.kategori][`${d.gender} ${d.altkategori}`]) {
            categorizedNav[d.kategori] = { ...categorizedNav[d.kategori], [`${d.gender} ${d.altkategori}`]: [] }
        }

        categorizedNav[d.kategori][`${d.gender} ${d.altkategori}`].push(d)
     
    }

    debugger;
}

 fs.writeFileSync(path.join(`${process.cwd()}`, 'dbCategorizedNav.json'), JSON.stringify(categorizedNav))



 for (let brand in db) {
    const favicon = require(path.join(`${process.cwd()}`,'src/comp-v2/favicons',`${brand}.json` ) )
    debugger
    const categorizedNav = {faviconUrl:favicon.url}
    const brandData = db[brand]
 
    for (let d of brandData) {
    
        if (!categorizedNav[d.kategori]) {
            categorizedNav[d.kategori] = { }

          
        }
        if(!categorizedNav[d.kategori][`${d.gender}`]){
            debugger
            categorizedNav[d.kategori][`${d.gender}`] = []
            debugger
        }


        categorizedNav[d.kategori][`${d.gender}`].push(d)
     
    }
    debugger
    fs.writeFileSync(path.join(`${process.cwd()}/brand-nav`, `${brand}.json`), JSON.stringify(categorizedNav))
    debugger;
}

//  for (let brand in db) {
//     const favicon = require(path.join(`${process.cwd()}`,'src/comp-v2/favicons',`${brand}.json` ) )
//     debugger
//     const categorizedNav = {faviconUrl:favicon.url}
//     const brandData = db[brand]
 
//     for (let d of brandData) {
    
//         if (!categorizedNav[d.kategori]) {
//             categorizedNav[d.kategori] = { }
//         }
      
//         if (!categorizedNav[d.kategori][`${d.gender} ${d.altkategori}`]) {
//             categorizedNav[d.kategori] = { ...categorizedNav[d.kategori], [`${d.gender} ${d.altkategori}`]: [] }
//         }

//         categorizedNav[d.kategori][`${d.gender} ${d.altkategori}`].push(d)
     
//     }
//     fs.writeFileSync(path.join(`${process.cwd()}/brand-nav`, `${brand}.json`), JSON.stringify(categorizedNav))
//     debugger;
// }

