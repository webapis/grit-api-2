
//merge previous urls with newly scraped urls

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const path = require('path')
const fs = require('fs')


const databaseRaw = fs.readFileSync(path.join(`${process.cwd()}`,'db.json'))

const db = JSON.parse(databaseRaw)

let databaseState = { ...db }
const brandNamesRaw =  fs.readFileSync(path.join(`${process.cwd()}`,'src/brandNames.json' ))
const brandNames = JSON.parse(brandNamesRaw)
debugger

    for (let bName of brandNames) {
        const brandPageData = fs.readFileSync(path.join(`${process.cwd()}`, 'temp-all/unzipped-data', `${bName}.json`))
        const { pageItems } = JSON.parse(brandPageData)
        const uniqueSet = [...new Set(pageItems.map((item) => JSON.stringify(item)))].map((item) => JSON.parse(item))
        debugger
        //page urls previously existed
        let prevBnameData = databaseState[bName]
      
        if (prevBnameData) {
          const mappedprevBnameData = prevBnameData.map(m => { return { ...m, updated: 0,date: Date.now() } })
          for (let page of uniqueSet) {
            const exist = mappedprevBnameData.find(f => f.objectID === page.objectID)
            if (exist) {
              exist.updated = 1
              exist.date =Date.now()
      
            } else {
       
              mappedprevBnameData.push({ ...page, updated: 1,date: Date.now() })
      
            }
      
          }
      
     
       
          databaseState = { ...databaseState, [bName]: mappedprevBnameData.map(m=> {return {...m,_id:m.objectID }} ).map(m=>{
            delete m.objectID
            delete m.keywords
            return{...m}})  }
      
        }
      
        else {
          databaseState = { ...databaseState, [bName]: uniqueSet.map(m=> {return {...m,_id:m.objectID,updated:1,date: Date.now() }} ).map(m=>{
            delete m.objectID
            delete m.keywords
            return{...m}})  }
        }
        fs.writeFileSync(path.join(`${process.cwd()}`, 'db.json'), JSON.stringify(databaseState))
      
      
      }
