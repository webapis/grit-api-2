import UrlEditor from '../../../../url-editor-components/url-editor'
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URL;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})
export default async function UrlEditorPage({params:{id,brand}}){

    await client.connect();
    // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
      const gritDb = await client.db('gritDb')
      const urlCol = await gritDb.collection(brand)
 
      const data = await urlCol.findOne({_id:id})
      console.log('data',data)

    return <UrlEditor data={data}/>

}