'use client'
import { useState } from "react";
import { Container, Typography } from "@mui/material";
import {Tab,Tabs} from "@mui/material";
import SearchBox from "@/components/SearchBox";
import BrandList from "@/comp-v2/brands-view/brand/BrandList";
import CategoriView from "@/comp-v2/categori-view";


export default async function App(props) {
  const {data}=props
const [selected,setSelected]=useState(0)

const handleChange = (event, newValue) => {
    setSelected(newValue);
  };
  return  <Container container>
    <Typography variant="h1" style={{fontSize:'1.5em', marginTop:10}} textAlign="center">Türkiye'nin En İyi Moda Siteleri</Typography>
    {/* <SearchBox/> */}
    <Tabs  value={selected} onChange={handleChange}>
      <Tab label="MARKALAR"/>
      <Tab label="ÜRÜNLER"/>
    </Tabs>
    {selected===0 &&  <BrandList />}
    {selected===1 &&  <CategoriView  data={data}/>}
    </Container>
}
