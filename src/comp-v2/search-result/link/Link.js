import LinkMui from '@mui/material/Link';
export default function Link({href,text}){
    return <div>
        <LinkMui underline='hover' style={{fontSize:20}} href={href}  target="_blank">{text}</LinkMui>
    </div>
}