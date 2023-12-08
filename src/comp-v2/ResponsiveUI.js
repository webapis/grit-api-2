"use client"
import useMediaQuery from '@mui/material/useMediaQuery';

import Display from './Display';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
const searchClient = algoliasearch('7JF244QSZZ', 'af8e387eae1a3614f7b0ba204c59f4a5');
export default function ResponsiveUI() {

    const matches = useMediaQuery('(min-width:600px)');

    return <InstantSearchNext indexName="dizi" searchClient={searchClient} routing>
        {!matches && <Display isOpen={false} variant="temporary"justifyContent ="flex-end" />}
        {matches && <Display isOpen={true} variant="persistent" justifyContent="center"  />}
    </InstantSearchNext>

}