import { Paper } from "@mui/material"
export default function List({children}){
    // const customBoxStyle = {
    //     border: '2px solid #3498db', // Customize the border color and style here
    //     borderRadius: '8px', // Add rounded corners
    //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    //     padding: '16px', // Add some padding for better appearance
    //   };
    return <Paper elevation={0} style={{margin:5}}> {children}</Paper>
}