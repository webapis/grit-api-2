'use client'
import { useState, useEffect } from "react";
import { Box, FormControl, FormLabel, Select, MenuItem, Button, Typography, Grid } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
export default function Editor({ data }) {
    const genders = ['erkek', 'kadın', 'kız çocuk', 'erkek çocuk', 'bebek'];
    const kategoriler = ['Indirim','Elbise', 'Ceket','Takı','Ayakkabı','Çanta'];
    const altkategoriler = ['İndirimli Abiye Ayakkabı','İndirimli Abiye Çanta ','Ucuz Davet Elbiseleri','İndirimli Abiye Elbise','İndirimli Abiye Fırsat Ürünleri','Abiye Çanta','Stiletto Ayakkabı Modelleri','Platform Topuk Ayakkabı Modelleri','Abiye Ayakkabı Modelleri','Abiye Küpe','Abiye Yüzük','Taç Aksesuar Takı Modelleri','Abiye Bileklik','Abiye Takı Seti','Abiye Takı Modelleri','Özel Tasarım Abiye | Exclusive Series',' Kadife Abiye Modelleri','Gece Elbiseleri','Büyük Beden Abiye Modelleri','Nişan Elbiseleri','Yeni Sezon Abiye Elbiseler','Hamile Abiye Modelleri','Sünnet Annesi Abiyeleri','Abiye Ceket','Gelinlik Modelleri','Abiye modelleri', 'Kısa Abiye Elbise Modelleri', 'Uzun Abiye Elbise Modelleri', 'Uzun Abiye Elbise Modelleri', 'Midi Boy Abiye Elbise Modelleri','Balık Abiye Elbise Modelleri','Tulum Abiyeler','Nedime Kıyafetleri','Nikah Elbisesi Modelleri','Mezuniyet Elbiseleri'];
    const [formData, setFormData] = useState({ ...data });
    const [updating, setUpdatig] = useState(false)
    const [updatingError, setUpdatingError] = useState('')
    const [edit, setEdit] = useState(false)


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        debugger
        try {

            setUpdatig(true)
            debugger
            await fetch(`/api/${data.brand}/${data._id}`, { method: 'PUT', body: JSON.stringify(formData) })
            debugger
            const localData =JSON.parse(localStorage.getItem(data.brand)).map(m=>{
                if(m._id ===data._id){
                    console.log('updated id===', data._id)
                    return formData
                }else{
                    return m
                }
            })
            localStorage.setItem(data.brand,JSON.stringify(localData))
            setEdit(false)
            setUpdatig(false)
            debugger
        } catch (error) {
            setUpdatig(false)
            setUpdatingError(error)
        }


    };

    useEffect(() => {

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
            altkategori: data.altkategori
        });
    }, [data]);


    return (
        <form>
            {updatingError && <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">{updatingError}</Alert>

            </Stack>}
            {/* 
         */}
            <Grid container>
                <Grid item xs={10}>
                    {!edit && <Typography variant="body2" sx={{ marginTop: 1, backgroundColor: formData.gender === undefined ? 'red' : '' }}>Gender: {formData.gender}</Typography>}
                    {!edit && <Typography variant="body2" sx={{ marginTop: 1, backgroundColor: formData.kategori === undefined ? 'red' : '' }}>Kategori: {formData.kategori}</Typography>}
                    {!edit && <Typography variant="body2" sx={{ marginTop: 1, backgroundColor: formData.altkategori === undefined ? 'red' : '' }}>Alt Kategori: {formData.altkategori}</Typography>}

                    {edit && <FormControl fullWidth>
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
                    </FormControl>}
                    {edit && <FormControl fullWidth>
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
                    </FormControl>}
                    {edit && <FormControl fullWidth>
                        <FormLabel>Alt Kategori</FormLabel>
                        <Select
                            name="altkategori"
                            value={formData.altkategori}
                            onChange={handleChange}
                        >
                            {altkategoriler.map((altkategori) => (
                                <MenuItem key={altkategori} value={altkategori}>
                                    {altkategori}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>}


                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                    <div>
                        {edit && <Button disabled={updating} variant="outlined" color="success" onClick={handleSubmit}>UPDATE</Button>}
                        {!edit && <Button variant="outlined" color="warning" onClick={() => setEdit(true)} >EDIT</Button>}

                    </div>

                </Grid>
            </Grid>
            {updating && <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>}


        </form>
    );
}