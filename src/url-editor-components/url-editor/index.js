'use client'
import { useState,useEffect } from "react";
import { TextField,FormControl,FormLabel,Select,MenuItem,Button } from "@mui/material";
export default function EditorForm  ({data})   {
    const genders = ['male', 'female'];
    const kategoriler = ['elbise', 'abiye'];
  
    const [formData, setFormData] = useState({...data
  
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      debugger
      event.preventDefault();
console.log('dddddddddd',formData)
debugger
const result =  await fetch(`http://localhost:3000/api/${data.brand}/${data._id}`,{ method:'PUT',body:JSON.stringify(formData)})
debugger

debugger
};
  
    useEffect(() => {
      // Form verilerini başlangıçta sağlanan JavaScript nesnesi ile doldurun
      setFormData({
        hrefText: data.hrefText,
        docTitle: data.docTitle,
        link: data.link,
        _id: data._id,
        brand: data.brand,
        domainName: data.domainName,
        date: data.date,
        updated: data.updated,
        gender: data.gender,
        kategori: data.kategori,
      });
    }, [data]);
  
    return (
      <form>
       
        <TextField
         fullWidth
          label="Link"
          name="link"
          value={formData.link}
          readOnly
        />
        {/* Editable fields */}
        <FormControl fullWidth>
          <FormLabel>Gender</FormLabel>
          <Select
           
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            {genders.map((gender) => (
              <MenuItem key={gender} value={gender}>
                {gender}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel>Kategori</FormLabel>
          <Select
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
          >
            {kategoriler.map((kategori) => (
              <MenuItem key={kategori} value={kategori}>
                {kategori}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <Button  onClick={handleSubmit}>Submit</Button>
      </form>
    );
  };
  