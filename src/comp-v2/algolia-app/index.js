'use client';
import algoliasearch from 'algoliasearch/lite';
import { Hits, SearchBox, RefinementList, Highlight, RangeInput, Pagination, HitsPerPage } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

const searchClient = algoliasearch('7JF244QSZZ', 'af8e387eae1a3614f7b0ba204c59f4a5');


function Hit({ hit }) {
    console.log(hit)
    return <div style={{ display: 'flex' }}>
        <img width="100" src={hit.imageUrl} />
        <Highlight attribute="title" hit={hit} />

    </div>
}

export default function Search() {

    return (
        <InstantSearchNext indexName="all" searchClient={searchClient} routing>
            <SearchBox searchAsYouType={false} />
            <div style={{ display: "flex" }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <RefinementList attribute="marka" searchable showMore limit={20} showMoreLimit={40} />
                    <RefinementList attribute="ct" searchable />


                    <RangeInput attribute="price" />

                </div>

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