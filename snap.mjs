//map favicons to url
import { createRequire } from "module";
import walkSync from "./utils/walkSync.mjs";
import makeDir from "make-dir";
const require = createRequire(import.meta.url);
require("dotenv").config();

// // debugger
const fs = require('fs')
const path = require('path')
const categorizedData = require('./dbCategorized.json')

const mapData = Object.values(categorizedData).flat()

function groupByCategory(data) {
    const result = {};

    data.forEach(item => {
        const gender = item.gender || "unknown";
        const kategori = item.kategori || "unknown";
        const altkategori = item.altkategori || "unknown";

        if (!result[gender]) {
            result[gender] = {};
        }

        if (!result[gender][kategori]) {
            result[gender][kategori] = {};
        }

        if (!result[gender][kategori][altkategori]) {
            result[gender][kategori][altkategori] = [];
        }

        result[gender][kategori][altkategori].push(item);
    });

    return result;
}

const groupedData = groupByCategory(mapData);


for (let gender in groupedData) {
    const genderData = groupedData[gender]
    debugger
    for (let kategori in genderData) {
        const kategoriData = genderData[kategori]
        debugger
        for (let altkategori in kategoriData) {
            debugger
            const altkategoriData = [...kategoriData[altkategori]]
            //map favicon
            for(let ak of altkategoriData){ 
debugger
                const faviconRow = fs.readFileSync(path.join(`${process.cwd()}`, 'src/comp-v2/favicons', `${ak.brand}.json`))
                const faviconUrl = JSON.parse(faviconRow).url
                ak.faviconUrl = faviconUrl
            }
            debugger
            const filePath = path.join("data-page", gender.trim().toLowerCase(), kategori.trim().toLowerCase() + '-' + altkategori.trim().toLocaleLowerCase().replaceAll(' ', '-'), "data.json")
            const dirName = path.dirname(filePath)
            makeDir.sync(dirName)
            fs.writeFileSync(filePath, JSON.stringify(altkategoriData))
            debugger
            kategoriData[altkategori] = altkategoriData.length
            debugger
        }


    }


}

fs.writeFileSync(path.join(`${process.cwd()}`, `public`, 'data', 'kategori-nav.json'), JSON.stringify(groupedData))



/*
const faviconRow = fs.readFileSync(path.join(`${process.cwd()}`, 'src/comp-v2/favicons', `${brand}.json`))
const faviconUrl = JSON.parse(faviconRow).url
pi.faviconUrl = faviconUrl

*/
