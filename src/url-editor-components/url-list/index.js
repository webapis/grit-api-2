'use client'
import React, { useEffect, useState } from 'react';
import { Link, Typography, Paper, Button,Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Editor from '../editor';
export default function UrlList({ brand }) {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  async function loadUrls() {
    debugger
    try {
      setLoading(true)
      const response = await fetch(`/api/url-list/${brand}/`)
      debugger

      const data = await response.json()


      localStorage.setItem(brand, JSON.stringify(data))
      setLoading(false)
      setState(data)
    } catch (error) {
      setError(error)
    }

  }

  useEffect(() => {
    if (localStorage.getItem(brand)) {
      const data = JSON.parse(localStorage.getItem(brand))
      setState(data)
    }
  }, [])

  return <div>
    <div>
  
    <Box >
    <Button onClick={loadUrls}>Load Data</Button>
    {loading &&  <LinearProgress />}
     
    </Box>
    </div>
 
    {state.map((m, i) => <PageCard key={i} page={m} />)}</div>
}

const PageCard = ({ page }) => {

  const { docTitle, link, objectID, brand, domainName, updated } = page;

  return (

    <Paper sx={{ display: 'flex', flexDirection: 'column', padding: 2, margin: 2 }} elevation={3}>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>DocTitle: {docTitle}</Typography>
      <Link href={link} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
        <Typography variant="body2" sx={{ color: '#007bff' }}>Link: {link}</Typography>
      </Link>
      <Typography variant="body2" sx={{ marginTop: 2 }}>Brand: {brand}</Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>Domain: {domainName}</Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>Object ID: {objectID}</Typography>
      <Editor data={page} />
      <Typography variant="body2" sx={{ marginTop: 1, backgroundColor: updated === false ? 'orange' : '' }}>Updates: {updated}</Typography>
    </Paper>
  );

};
