
import UrlList from "@/url-editor-components/url-list"

//import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// })


export default async function page({ params: { slug } }) {

// await client.connect();
// // Send a ping to confirm a successful connection
// //await client.db("admin").command({ ping: 1 });
// const gritDb = await client.db('gritDb')
//   const urlCol = await gritDb.collection(slug)
//   const data = await urlCol.find({}).toArray()


    return <UrlList brand={slug}  />
}