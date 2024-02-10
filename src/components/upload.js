import '../App.css';

import Container from './container';
import phoneWave from "./images/WaveMobile.png"
import wave from "./images/base.png"
import fish from '../components/images/orangeFish.png'
import Navbar from './navbar';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function Upload() {
    
    const [filename,setFilename]=useState();
    const [message,setMessage]=useState();
    const [password,setPassword]=useState();
    const [file,setFile]=useState();
    

    const handleClick=()=>{
   const data=  new FormData()
 //console.log(filename,message,password,file)
 data.append("file",file)
   data.append("name",filename);
   data.append("text",message)
   data.append("password",password)
 

       const uploadfile = async ()=>{
    try {
      const responce = await axios.post("https://oceanbackend-production.up.railway.app/upload",data)
     alert(responce.data)
    } catch (error) {
        console.log(error)
    }
          
    
          
       
}
uploadfile();}

    
    return (
        <>
            <Navbar></Navbar>
            <Box sx={{ display: 'flex', alignItems: 'center', height: '80vh',justifyContent:'center' }}>

                <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white',   justifyContent: 'center', height: '70vh', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', alignItems: 'center' }}>
                    <TextField sx={{ color: '#ffffff', backgroundColor: '#D9D9D9', borderRadius: '15px', marginBottom: '5%', width: '90%', textAlign: "center", }} id="outlined-basic" variant="outlined" label="File Name" onChange={(event)=>{setFilename(event.target.value)}}/>
                    <TextField sx={{ color: '#ffffff', backgroundColor: '#D9D9D9', borderRadius: '15px', marginBottom: '5%', width: '90%', textAlign: "center", }} id="outlined-basic" variant="outlined" label="Text Message"onChange={(event)=>{setMessage(event.target.value)}} />
                    <TextField sx={{ color: '#ffffff', backgroundColor: '#D9D9D9', borderRadius: '15px', marginBottom: '5%', width: '90%', textAlign: "center", }} id="outlined-basic" variant="outlined" label="Password" type="password" onChange={(event)=>{setPassword(event.target.value)}}/>
                    <Box sx={{ width: "100%",height:"100px", justifyContent: 'space-around', display: "flex" ,alignItems:'center'}}>
                        <Button sx={{ color: 'white', border: 'solid 2px #52D9BB ', borderRadius: '8px', width: '30%', height: '40%', ":hover": { bgcolor: '#52D9BB', color: '#16162E' } }} onClick={()=>{handleClick()}} >Upload </Button>
                        <Button  variant="contained" sx={{backgroundColor:"rgb(217,217,217,0.08)",width:'60%',height:"40%",borderRadius:'10px'}} component="label" startIcon={<CloudUploadIcon />} ><input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
                       
                    </Button>
                    {/* <TextField variant='outlined' type='file' onClick={(event)=>{setFile(event.target.value)}}>upload</TextField> */}
                    </Box>
               {/* <input type='file'onChange={(event)=>setFile(event.target.files[0])} ></input> */}
                         
                </Box>


            </Box>
            <Box sx={{display:{xs:'flex',md:'none',xl:'none'},width:'100vw',alignItems:"flex-end"}}>
        <img src={phoneWave} height={70} width="100%" alt="" />
        </Box>
        <Box sx={{display:{xs:'none',md:'flex',xl:'flex'},width:'100vw',alignItems:"flex-end"}}>
        <img src={wave} height={80} width="100%" alt="" />
        </Box>
         
         
        </>
    );
}