'use client';
import algoliasearch from 'algoliasearch/lite';
import { Typography,Grid } from '@mui/material';
import { Hits, SearchBox, RefinementList, Highlight, RangeInput, Pagination, HitsPerPage, CurrentRefinements, ClearRefinements, Stats } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import Image from '../Image';
import Drawer from '@mui/material/Drawer';
const searchClient = algoliasearch('7JF244QSZZ', 'af8e387eae1a3614f7b0ba204c59f4a5');


function Hit({ hit }) {
    console.log(hit)
    return <div style={{ display: 'flex',flexDirection:'column' }}>
        <Image fotografUrl={hit.fotografUrl} title={hit.title}/>
        <Highlight attribute="title" hit={hit} />

    </div>
}

export default function Search() {

    return (
        <InstantSearchNext indexName="dizi" searchClient={searchClient} routing>
            <CurrentRefinements />
            <ClearRefinements />
            <SearchBox searchAsYouType={false} />
            <Stats />
            <div style={{ display: "flex" }}>
                <Drawer open={true} style={{ display: 'flex', flexDirection: 'column' }} variant="persistent">
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
                </Drawer>
                <Hits hitComponent={Hit} />
            </div>
            <Pagination />
            <HitsPerPage
                items={[
                    { label: '8 hits per page', value: 8, default: true },
                    { label: '16 hits per page', value: 16 },
                ]}
            />
        </InstantSearchNext>
    );
}