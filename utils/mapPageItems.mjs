//map favicons to url
import { createRequire } from "module";
import walkSync from "./walkSync.mjs";
import makeDir from "make-dir";
const require = createRequire(import.meta.url);
require("dotenv").config();

// // debugger
const fs = require('fs')
const path = require('path')



debugger
makeDir.sync('page-items')
walkSync(path.join(`${process.cwd()}/temp-all/unzipped-data`), (filepath) => {
    const dataRaw = fs.readFileSync(filepath)
    const { pageItems } = JSON.parse(dataRaw)
    const bName = pageItems[0].brand
    for (let pi of pageItems) {
        delete pi.keywords
        const brand = pi.brand

        const faviconRow = fs.readFileSync(path.join(`${process.cwd()}`, 'src/comp-v2/favicons', `${brand}.json`))
        const faviconUrl = JSON.parse(faviconRow).url
        pi.faviconUrl = faviconUrl

    }
debugger
    fs.writeFileSync(path.join(`${process.cwd()}/page-items`, `${bName}.json`), JSON.stringify(pageItems))

    debugger;


})

debugger