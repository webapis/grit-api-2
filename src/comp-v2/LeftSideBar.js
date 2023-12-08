import { Typography, Grid } from '@mui/material';
import { Hits, SearchBox, RefinementList, Highlight, RangeInput, Pagination, HitsPerPage, CurrentRefinements, ClearRefinements, Stats } from 'react-instantsearch';
export default function LeftSideBar() {

    return <div style={{paddingLeft:15}}>

        <Typography variant='button' style={{fontWeight:700}}>Karakter</Typography>
        <RefinementList  attribute="karakter" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Oyuncu</Typography>
        <RefinementList attribute="oyuncu" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Dizi</Typography>
        <RefinementList attribute="dizi" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Sezon</Typography>
        <RefinementList attribute="sezon" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Bölüm</Typography>
        <RefinementList attribute="bölüm" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Sene</Typography>
        <RefinementList attribute="sene" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Tarih</Typography>
        <RefinementList attribute="tarih" showMore limit={20} showMoreLimit={40} />
        <Typography variant='button' style={{fontWeight:700}}>Ürün</Typography>
        <RefinementList attribute="ürün" showMore limit={20} showMoreLimit={40} />
    </div>
}