import CategoriView from ".";
import data from '../../../public/data/kategori-nav.json'
export default {
    component: CategoriView
}

export const Primary = () => <CategoriView data={data} />

