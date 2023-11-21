import CategoryList from ".";

export default {
    component: CategoryList
}

const data =[{id:"0",keyword:"first keyword"},{id:"1",keyword:"second keyword"}]

export const Primary = () => <CategoryList data={data} colName="kategori" host=""/>
