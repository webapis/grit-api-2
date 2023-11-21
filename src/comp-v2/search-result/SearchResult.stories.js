import SearchResult from "./SearchResult";
import fakeData from "./list/fakeData";

export default{
    title:'SearchResult/SearchResult',
    component:SearchResult
}

export const SearchResultFD= ()=> <SearchResult data={fakeData}/>