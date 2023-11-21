import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ShowAllButton({link}){
    return      <Divider textAlign="left" >
    <Button  component="A" href={link} target='_blank' sx={{color:'#202124', backgroundColor:'#D8D7DC', borderRadius:20,textTransform:'capitalize', paddingLeft:5, paddingRight:5}} size="small"  endIcon={<ArrowForwardIcon />}>
    Tümünü Göster
   
    </Button>
  </Divider>
}