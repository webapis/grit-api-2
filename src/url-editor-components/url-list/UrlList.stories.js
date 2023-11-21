import UrlList from ".";
import mockData from './mockData.json'
export default { component: UrlList }

export const Primary= () => <UrlList data={mockData}/>