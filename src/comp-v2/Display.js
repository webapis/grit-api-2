"use client"

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid,Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from './Image';
import LeftSideBar from './LeftSideBar';
import { Hits, SearchBox, RefinementList, Highlight, RangeInput, Pagination, HitsPerPage, CurrentRefinements, ClearRefinements, Stats,useHits } from 'react-instantsearch';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft(props) {
  const { isOpen, variant, justifyContent } =props
  const theme = useTheme();
  const [open, setOpen] = React.useState(isOpen);
  const { hits, results, sendEvent } = useHits(props);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
         
       
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Dizi Kıyafeti
          </Typography>
          
          <SearchBox style={{width:'50%'}}/>
       
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant={variant}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <LeftSideBar />

      </Drawer>
      <Main open={open}>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <CurrentRefinements />
            <ClearRefinements />
      </Box>
   
      
        <Grid container justifyContent={justifyContent} gap={1} >
         {hits.map(m=><Grid item  xs={6} md={3}><Hit {...m}/></Grid>)}
        </Grid>

      </Main>
    </Box>
  );
}



function Hit({ fotografUrl,title,link,marka }) {

  return <Paper style={{ display: 'flex', flexDirection: 'column', padding:10 }} >
    <Image fotografUrl={fotografUrl} title={title} />
    <Urun title={title} link={link}  marka={marka}/>
 
  </Paper>
}

function Urun({ link, title, marka }) {
  const links =link.split(',')
  return <div>{title.split(',').map((m,i)=><div><span>{marka[i]}</span> <a href={`${links[i]}`} target='_blank' style={{textTransform:'lowercase'}}>: {m}</a> </div>)}</div>

}