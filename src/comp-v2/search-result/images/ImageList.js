import Image from "./Image"
import { Grid } from "@mui/material"
export default function ImageList({images}){

    return <Grid container spacing={1}>{images.map((m,i)=><Grid key={i} item xs={2} md={1}> <Image src={m.url} alt={m.alt}/></Grid> )} </Grid> 
}