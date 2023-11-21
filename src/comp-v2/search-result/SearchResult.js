import List from "./list/List";
import ListItem from "./list-item/ListItem";
export default function SearchResult({data}){
    debugger
return <List>
{data.map((m,i)=>{
    const faviconUrl =m.faviconUrl
    const hostTitle =new URL(m.link).origin
    const brandTitle = m.brand
    const linkText = m.docTitle.length> m.hrefText.length  ?m.docTitle:m.hrefText
    const keywords = []
    const total =0
    const startPrice=0
    const images =m.images
    return <ListItem key={i} faviconUrl={faviconUrl}
    link={m.link}
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
}