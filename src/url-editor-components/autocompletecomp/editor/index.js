import { TextField, Button } from "@mui/material";

export default function Editor({colName, id,data}) {

    async function updateKategory() {

     //   await fetch(`/api/category/?colName=${colName}&id=${id}`, { method: 'PUT', body: JSON.stringify(formData) })
    
    }

    async function addKategory() {
        
      //  await fetch(`/api/${data.brand}/${data._id}`, { method: 'PUT', body: JSON.stringify(data) })

    }

    return <div><TextField fullWidth />
        <div>
            <Button onClick={updateKategory} variant="outlined">Update</Button>
            <Button onClick={addKategory} variant="outlined" style={{ margin: 5 }}>Add</Button>
        </div>
    </div>
}
