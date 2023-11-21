import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';

export default function AutoCompleteComp({ colName, dbName }) {
    const defaultProps = {
        options: ['ONE', 'TWO'],
    };
    const [value, setValue] = React.useState(null);

    async function refresh() {
    
        const data =  await fetch(`/api/category?colName=${colName}`, { method: 'GET'})
    
    }

    return <div style={{ display: 'flex', justifyItems: "center" }}>

        <Autocomplete
            fullWidth
            {...defaultProps}
            id="controlled-demo"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            renderInput={(params) => (
                <TextField {...params} label="controlled" variant="standard" />
            )}
        />
        <Button onClick={refresh}>Refresh</Button>
    </div>
}



