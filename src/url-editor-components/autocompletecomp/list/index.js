import { useState } from "react";
import { ListItem, List, Button, TextField } from "@mui/material";


export default function CategoryList({ data, colName }) {
    const [selectedItem, setSelecterItem] = useState(null)
    const [isEditable, setIsEditable] = useState(false)


    function handleEdit(id) {

        setSelecterItem(id)
        setIsEditable(true)
    }

    function handleOffEditable() {

        setIsEditable(false)
    }


    return <List>
        <NewKeyword colName={colName}/>
        {data.map((m, i) => <EditorState key={i} handleOffEditable={handleOffEditable} id={m.id} handleEdit={handleEdit} keyword={m.keyword} editable={selectedItem === m.id && isEditable} />)}

        <ListItem secondaryAction={<Button
            edge="end"
            onClick={() => handleUpdate()}
        >SEARCH</Button>}><TextField value={''} onChange={() => { }} /> </ListItem>
    </List>
}


function NewKeyword({ colName }) {
    const [newKeyword, setNewKeyword] = useState('')
    const [error, setError] = useState(false)
    async function addKeyword() {
        try {
            const response = await fetch(`/api/category?colName=${colName}`, { method: "post", body: newKeyword })
            console.log('response',response)

        } catch (error) {

            setError(error)

        }
    }

    function handleNewKeywordChange(e) {


        setNewKeyword(e.target.value)
    }


    return <ListItem secondaryAction={<Button
        edge="end"
        onClick={() => addKeyword()}
    >ADD</Button>}><TextField helperText={error &&error.message} error={error} value={newKeyword} onChange={handleNewKeywordChange} /> </ListItem>
}

function EditorState({ editable, keyword, handleEdit, id, handleOffEditable }) {
    const [value, setValue] = useState()


    function handleUpdate() {

        handleOffEditable()
    }

    function handKeywordChange(event) {
        setValue(event.target.value)
    }
    if (editable)
        return <Editable value={value} id={id} keyword={keyword} handleUpdate={handleUpdate} handKeywordChange={handKeywordChange} />
    return <ReadOnly id={id} keyword={keyword} handleEdit={handleEdit} />

}


function ReadOnly({ keyword, handleEdit, id }) {

    return <ListItem secondaryAction={<Button
        edge="end"
        onClick={() => handleEdit(id)}


    >Update</Button>}>{keyword}</ListItem>
}

function Editable({ keyword, handleUpdate, handKeywordChange }) {
    return <ListItem secondaryAction={<Button
        edge="end"
        onClick={() => handleUpdate()}
    >Save</Button>}><TextField value={keyword} onChange={handKeywordChange} /> </ListItem>
}