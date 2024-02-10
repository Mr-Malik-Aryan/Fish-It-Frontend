import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../components/images/Component 6Logo.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  
 const navigate=useNavigate();
  return (
    <Box  sx={{border:'none'}}>

      <AppBar position="static" color='transparent'sx={{width:'100%',marginTop:'10px'}} >
        <Toolbar sx={{display:'flex',justifyContent:'center',height:'7vh',alignItems:'center'}}>
   
        <Box sx={{marginRight:"auto",display:'flex',alignItems:'center',justifyContent:{xs:'center',md:'normal',xl:'normal'},width:'100vw'}}>
          <img src={logo} alt="logo.png" height={30} ></img>
        <Typography sx={{fontSize:"150%",color:'white'}}>Fish-It</Typography>
       
    </Box>
        
        <Box sx={{display:'flex',position:'absolute', width:{xs:'55%',xl:"40%"},justifyContent:'space-evenly',display: { xs: 'none', md: 'flex' },}} >
     
          <Button sx={{fontSize:'68%',":hover":{color:'#52D9BB'},color:'white'}} color="inherit" onClick={()=>{navigate('/')}}>Home</Button>
          <Button sx={{fontSize:'68%',":hover":{color:'#52D9BB'},color:'white'}} color="inherit" onClick={()=>{navigate('/upload')}}>Upload</Button>
          <Button sx={{fontSize:'65%',":hover":{color:'#52D9BB'},color:'white'}} color="inherit"onClick={()=>{navigate('/download')}}>Download</Button>
          <Button sx={{fontSize:'68%',":hover":{color:'#52D9BB'},color:'white'}} color="inherit" onClick={()=>{navigate('/about')}}>About</Button>
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
 
  );
}

