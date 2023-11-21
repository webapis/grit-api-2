'use client'
import Brand from ".";
import logos from '../../../../public/brand-logos/logos.json'
import { Grid, Paper } from "@mui/material";
import groupByBrandAndAlphabet from "./groupByBrandAndAlphabet";
import Avatar from '@mui/material/Avatar';

const groupedLogos = Object.entries(groupByBrandAndAlphabet(logos))

export default function BrandList (){ 
    
    return <Grid  container gap={1}>{groupedLogos.map(m => {
    return <Grid item xs={12}>
              <Avatar  sx={{ width: 40, height: 40, margin:1 }}>{m[0]}</Avatar>
       
        <Paper elevation={3} style={{padding:10}}>
     
        <Grid container  gap={1}  >{m[1].map(m => <Grid item><Brand brand={m.brand} src={m.url} link={m.link} /></Grid>)}</Grid></Paper> </Grid>
})}</Grid>}