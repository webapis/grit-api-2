import fs from 'fs'


const filenames = fs.readdirSync(`${process.cwd()}/temp-all/unzipped-data`);
const data = filenames.map(m => m.replace('.json', ''));
fs.writeFileSync(`${process.cwd()}/src/brandNames.json`, JSON.stringify(data))

