'use client'
import { useState } from 'react'
import { Tab, Tabs,Container } from "@mui/material"
export default function CategoriView({ data }) {
    const [value, setValue] = useState(0)
    const genderToArray = Object.entries(data)

    function onChange(e,value){
        setValue(value)
    }

    return <Container>
        <Container style={{display:'flex',justifyContent:'center'}}>
        <Tabs value={value} onChange={onChange}>{genderToArray.map((m, i) => <Tab label={m[0]} key={i} />)}</Tabs>
        </Container>
        {genderToArray.map((m, i) => {
            if (value === i)
                return <TabContent gender={m[0]} data={Object.entries(m[1])} />
            return null
        })}
    </Container>
}



function TabContent({ data, gender }) {
console.log('gender',gender)
    return data.map((m,i)=>{return <ul><span style={{fontWeight:'bold'}}> {m[0]}</span>
     {Object.entries( m[1]).map(([name,count],i)=><li><a keu={i} href={`/${gender.toLowerCase()}-${name.trim().toLowerCase().replaceAll(' ','-')}`} target='_blank' style={{textDecoration:"none"}}>{name} {count}  </a></li>)}</ul>})
}


