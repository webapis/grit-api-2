import Breadcrumbs from '@mui/material/Breadcrumbs';
export default function Host ({title}){
    return <div style={{fontSize:12}}><span>{title}</span><span style={{lineHeight:0.5}}>{` › ...`}</span></div>
}