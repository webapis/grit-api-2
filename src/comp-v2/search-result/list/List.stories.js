import List from "./List";
import ListItem from "../list-item/ListItem";

import fakeData from "./fakeData";

debugger
export default{
    title:"SearchResult/List",
    component:List
}

export const Primaryg =()=><List>
{fakeData.map(m=>{
    const faviconUrl =m.item.faviconUrl
    const hostTitle =new URL(m.item.link).origin
    const brandTitle = m.item.brand
    const linkText = m.item.docTitle.length> m.item.hrefText.length  ?m.item.docTitle:m.item.hrefText
    const keywords = []
    const total = m.item.searchResult
    const startPrice= m.searchResult.length>0? m.searchResult[0].item.priceNew:0
    const images = m.searchResult.map(m=> {return {url:m.item.imageUrl}}).filter((f,i)=>i<8)
    return <ListItem faviconUrl={faviconUrl} 
    hostTitle={hostTitle}
    brandTitle={brandTitle} 
    linkText={linkText}
    keywords={keywords}
    total=  {total}
    startPrice={startPrice}
    images={images}
     />
})}
</List>