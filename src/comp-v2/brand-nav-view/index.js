import React from 'react';
import ListItem from '../search-result/list-item/ListItem';
import List from '../search-result/list/List';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import {
  Container,
  Typography,


} from '@mui/material';

function sortByCategory0(a,b) {

    const categoryA = a[0]
    const categoryB = b[0]

    if (categoryA < categoryB) {
      return -1;
    } else if (categoryA > categoryB) {
      return 1;
    } else {
      return 0;
    }

}

const NavigationComponent = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const faviconUrl = data[0][1]
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container>
      {data.filter((f, i) => i > 0).sort(sortByCategory0).map((category) => {
 
        return <div key={category[0]}>
          <Typography variant="h5" style={{ marginBottom: '8px' }}>
            {category[0]}
          </Typography>
          <List>
            <Tabs onChange={handleChange} value={selectedTab}>
              {Object.entries(category[1]).map(([subcategory, subcategoryLinks]) => {
                return <Tab label={subcategory} />
              })}
            </Tabs>
            {Object.entries(category[1]).map(([subcategory, subcategoryLinks], i) => {
              return <TabPanel value={selectedTab} subcategoryLinks={subcategoryLinks} index={i} faviconUrl={faviconUrl} />
            })}
          </List>
        </div>
      })}
    </Container>
  );
};

export default NavigationComponent;


function TabPanel({ index, value, subcategoryLinks, faviconUrl }) {

  if (index === value) {
    return <List>
      {subcategoryLinks.sort(sortByAltkategori).map((link) => {
        return <ListItem key={link._id} faviconUrl={faviconUrl} hostTitle={link.domainName} brandTitle={link.brand} linkText={link.altkategori} docTitle={link.docTitle} gender={link.gender} />
      })}
    </List>
  } else return null

}


function sortByAltkategori(a,b) {

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