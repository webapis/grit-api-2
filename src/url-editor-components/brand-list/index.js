import brandNames from '../../brandNames.json'

export default  function BrandList (){

   
    return <div>{brandNames.map(m=><li><a href={`/url-list/${m}`}>{m}</a></li>)}</div>

}