import { Typography,Grid } from '@mui/material';
import { Hits, SearchBox, RefinementList, Highlight, RangeInput, Pagination, HitsPerPage, CurrentRefinements, ClearRefinements, Stats } from 'react-instantsearch';
export default function LeftSideBar (){

    return <div>

<Typography>Karakter</Typography>
                    <RefinementList attribute="karakter" showMore limit={20} showMoreLimit={40} />
                    <Typography>Oyuncu</Typography>
                    <RefinementList attribute="oyuncu" showMore limit={20} showMoreLimit={40} />
                    <Typography>Dizi</Typography>
                    <RefinementList attribute="dizi" showMore limit={20} showMoreLimit={40} />
                    <Typography>Sezon</Typography>
                    <RefinementList attribute="sezon" showMore limit={20} showMoreLimit={40} />
                    <Typography>Bölüm</Typography>
                    <RefinementList attribute="bölüm" showMore limit={20} showMoreLimit={40} />
                    <Typography>Sene</Typography>
                    <RefinementList attribute="sene" showMore limit={20} showMoreLimit={40} />
                    <Typography>Tarih</Typography>
                    <RefinementList attribute="tarih" showMore limit={20} showMoreLimit={40} />
                    <Typography>Ürün</Typography>
                    <RefinementList attribute="ürün" showMore limit={20} showMoreLimit={40} />
    </div>
}