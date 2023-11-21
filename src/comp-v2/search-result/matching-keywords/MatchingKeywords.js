
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export default function MatchingKeywords({keywords}){

    return <Stack direction="row" spacing={1} >{keywords.map(m=>{return <Chip label={m} size='small' sx={{fontSize:12}}/> })}</Stack>
}