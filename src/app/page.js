import fsPromises from "fs/promises";
import path from 'path'
import App from "@/comp-v2/app"

export const metadata = {
  title: 'Türk Modası ve Uluslararası Markalar: Her Zevke Uygun Giyim ve Aksesuarlar',
  description: 'Türk Modası Dünyası: Erkek, Kadın ve Çocuklar İçin Stil Sahibi Giyim Seçenekleri',
}


export default async function indexPage(props) {

  const jsonDataPath = path.join(process.cwd(), 'public','data', 'kategori-nav.json')
  const jsonData = await fsPromises.readFile(jsonDataPath);
  const objectData = JSON.parse(jsonData);
  return <App data={objectData} />

}




