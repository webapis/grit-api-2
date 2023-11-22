//map favicons to url
import { createRequire } from "module";
import walkSync from "./utils/walkSync.mjs";
import makeDir from "make-dir";
const require = createRequire(import.meta.url);
require("dotenv").config();

// // debugger
const fs = require('fs')
const path = require('path')

function searchObject(obj, searchString) {
    // Iterate through each property of the object
    for (let key in obj) {
        // Check if the property value is a string and contains the search string
        if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(searchString.toLowerCase())) {
            return true; // Match found
        }
    }
    return false; // No match found
}


const sampleObject = {
    "title": "abiyefon kayık yaka kısa pullu davet elbisesi abk1723",
    "priceNew": "1494.00",
    "imageUrl": "https://www.abiyefon.com/images/image/200/23193/115960504_0.jpg",
    "link": "https://www.abiyefon.com/kayik-yaka-kisa-pullu-davet-elbisesi-abk1723",
    "timestamp": 1697001104821,
    "marka": "abiyefon",
    "id": "91ce2c4f2aa9e2753594e9262598e790cf77dfe6",
    "pid": "7228c3d184cdbb5a1049a1da6a40e6f86529273c"
};

const result =searchObject(sampleObject,'pullu')
debugger