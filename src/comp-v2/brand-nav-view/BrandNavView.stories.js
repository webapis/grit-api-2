import BrandNavView from ".";
import brandnavData from '../../../brand-nav/abiyefon.json'
console.log("brandnavData",Object.entries( brandnavData))
debugger
export default {
    component: BrandNavView
}

const data =Object.entries( brandnavData)
export const Primary =()=> <BrandNavView data={data}/>