import { Paper,Box } from "@mui/material"
export default function Brand({ brand, src,link }) {
    const customBoxStyle = {
        border: '2px solid #3498db', // Customize the border color and style here
        borderRadius: '8px', // Add rounded corners
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
        padding: '16px', // Add some padding for better appearance
      };
    
    return <a href={link} target="_blank"><Box  sx={{...customBoxStyle, width: 130, height: 130, display: "flex", alignItems: "center" }}><img style={{ width: '100%', height: 'auto' }} src={src} /></Box></a> 
}