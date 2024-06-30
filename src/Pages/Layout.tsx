import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Arrow from '../assets/arrow.png';
import credit from '../assets/credit.png';
import dataset from '../assets/datasets.png';
import workflow from '../assets/workflows.png';
import ques from '../assets/ques.png';
import navLeft from '../assets/navLeft.png';
import infinity from '../assets/infinity.png';
import notification from '../assets/Notification.png';
import profile from '../assets/Profile.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop:any) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
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
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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
  // necessary for content to be below app barO
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout({children}:any) {
  const [open, setOpen] = React.useState(true);
  const [myIndex, setMyIndex]=React.useState(0);

  const location=useLocation();
  console.log("location", location)
  const navigation=useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);

  };

  const NavigationClick=(index:any)=>{
    setMyIndex(index);
    {index===0 && navigation('/')}
    {index===1 && navigation('/workflow')}
    {index===2 && navigation('/credit')}
  }

  const sideBarHeader=[{label:'Datasets', route:'/', icon:dataset},{
    label:'Workflows',
    route:'/workflow',
    icon:workflow,

  }, {
    label:'Credit usage',
    route:'/credit',
    icon:credit
  }]
  return (
    <Box sx={{ display: 'flex'}}>
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
          <Box className='navbar'>
            <Box sx={{display:'flex', gap:'10px', alignItems:'center'}}>
              {open && (
                <img src={Arrow} onClick={handleDrawerClose} height="24px" width="24px" style={{cursor:'pointer'}}/>
              )}
          
          <Typography variant="h6" noWrap component="div" sx={{fontWeight:700, fontSize:'20px', display:{
            xs:'none',
            sm:'none',
            md:'block'
          }}}>
          Amazon product price
          </Typography>
          <Box sx={{alignContent:'center',  display:{
            xs:'none',
            sm:'none',
            md:'flex'
          }}}>

              <img src={ques}/>
          </Box>
            </Box>
            <Box className='nav_right'>
              
              <Box sx={{display:'flex', minWidth:'200px', alignItems:'center', gap:'10px', backgroundColor:'#ECF3FE', borderRadius:'10px'}} p={0.9}>
              <img src={navLeft} />
              <Typography sx={{fontWeight:600, fontSize:'12px'}}>Credit usage: 1018 /</Typography>
              <img src={infinity} />
              </Box>
              <Box sx={{textAlign:'center', display:{
                xs:'none',
                sm:'flex'
              }}}>
             <img src={notification} />
              </Box>
             <Box sx={{width:'30px',display:'flex', alignItems:'center',justifyContent:'center', height:'30px', borderRadius:'50%'}}>
                <img src={profile} style={{objectFit:'contain', height:'30px', width:'30px'}}/>
             </Box>
            </Box>
          </Box>
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
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{width:'100%'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}} ml={2}>Grepsr</Typography>
          </Box>
        </DrawerHeader>
        <Divider />
        <List sx={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', justifyContent:'space-between', height:'90vh'}}>
          <Box sx={{ width:'90%'}}>

          {sideBarHeader.map((data, index) => (
            <ListItem key={data?.label}>
              <ListItemButton sx={{borderRadius:'10px', display:'flex', gap:'8px',
                 backgroundColor: location.pathname===data?.route ? '#D6E7FF' : 'inherit',
                 color: location.pathname===data.route? 'blue' : 'inherit',
            }}
                onClick={()=>NavigationClick(index)}
                // onClick={()=>{
                //    setMyIndex(index)
                // }}
            >
                <img src={data?.icon} />
                
                <ListItemText primary={data?.label} sx={{fontWeight:500}}/>
               
              </ListItemButton>
              
           
            </ListItem>
          ))}
          </Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'10px', borderRadius:'10px', alignItems:'center', justifyContent:'center', 
              backgroundColor:'#F4F5FC',width:'90%', padding:'25px',marginTop:'100px'}}>
              <Typography>Need any help?</Typography>
              <Box sx={{width:'100%',display:'flex', padding:'7px', 
                alignItems:'center', justifyContent:'center', backgroundColor:'#D6E7FF', color:'blue',
                  borderRadius:'5px'
                }}>
                Contact Support
              </Box>
            </Box>
        </List>
      
      </Drawer>

      <Main open={open} sx={{backgroundColor:'#F4F5FC', height:'100vh'}}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
