import path from 'path'
import fsPromises from "fs/promises";
import { Container } from '@mui/material';
import List from '@/comp-v2/search-result/list/List';
import ListItem from '@/comp-v2/search-result/list-item/ListItem';
export default async function SlugPage({ params: { slug } }) {

  const gender = decodeURI(slug).includes('çocuk')?  decodeURI(slug).split('-').splice(0,2).join('-') :decodeURI(slug).split('-')[0]
  console.log('gender',gender)
  const url = decodeURI(slug).replace(gender,'').split('-').slice(1).join('-')
  console.log('url',url)

  const dataFilePath = path.join(process.cwd(), `data-page/${gender}/${url}/data.json`);
  const jsonData = await fsPromises.readFile(dataFilePath);
  const objectData = JSON.parse(jsonData);

  return <Container><List>
    {objectData.sort(sortByAltkategori).map((link) => {
      return <ListItem  link={link.link} key={link._id} faviconUrl={link.faviconUrl} hostTitle={link.domainName} brandTitle={link.brand} linkText={link.altkategori} docTitle={link.docTitle} gender={link.gender} />
    })}
  </List></Container>

}




function sortByAltkategori(a, b) {

  const categoryA = a.altkategori
  const categoryB = b.altkategori

  if (categoryA < categoryB) {
    return -1;
  } else if (categoryA > categoryB) {
    return 1;
  } else {
    return 0;
  }

}