import '../App.css';
import Container from './container';
import phoneWave from "./images/WaveMobile.png"
import wave from "./images/base.png"
import Navbar from './navbar';
import Alert from '@mui/material/Alert';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Download() {
   
    const [filename, setFilename] = useState();
    const [message, setMessage] = useState();
    const [password, setPassword] = useState();
    const [downloader, setDownloader] = useState();
    const formData = new FormData();

    formData.append('name', filename);  // Replace with actual name
    formData.append('message', message);  // Replace with actual message
    formData.append('password', password);  // Replace with actual password
    const navigate = useNavigate();
    const handleClick = (() => {
        axios.get(`https://oceanbackend-production.up.railway.app/download/${filename}/${password}`, {

        })
            .then(response => {
                console.log(response.data);
                setDownloader(1);
                setMessage(response.data.text)
                window.location.replace(`https://oceanbackend-production.up.railway.app/downloadfile/${filename}/${password}`)
                 
            })
            .catch(error => {
             alert(" No such file exists ")
            });
    })
    useEffect(() => {
  
    }, [downloader])
    if (downloader == 1) {
        return (
            <>
                <Navbar></Navbar>
                <Alert severity="success">Downloading will start shortly</Alert>
                <Box sx={{ display: 'flex', alignItems: 'top', height: '100vh', justifyContent: 'center' }}>
                   
                        <Typography sx={{color:'white'}}>{message}</Typography>
               

                </Box>
            </>)
    }
    else {


        return (
            <>
                <Navbar></Navbar>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '80vh', justifyContent: 'center' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white',  justifyContent: 'center',height:'70vh',width:'60vh', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', alignItems: 'center' }}>
                        <TextField sx={{ color: '#ffffff', backgroundColor: '#D9D9D9', borderRadius: '15px', marginBottom: '5%', width: '90%', textAlign: "center", }} id="outlined-basic" variant="outlined" label="File Name" onChange={(event) => { setFilename(event.target.value) }} />
                        <TextField sx={{ color: '#ffffff', backgroundColor: '#D9D9D9', borderRadius: '15px', marginBottom: '5%', width: '90%', textAlign: "center", }} id="outlined-basic" variant="outlined" label="Password" type="password" onChange={(event) => { setPassword(event.target.value) }} />
                        <Box sx={{ width: "100%", height: "100px", justifyContent: 'space-around', display: "flex", alignItems: 'center' }}>
                       
                            <Button sx={{ color: 'white', border: 'solid 2px #52D9BB ', borderRadius: '8px', width: '40%', fontSize: '80%', height: '60%', ":hover": { bgcolor: '#52D9BB', color: '#16162E' } }} onClick={() => { handleClick() }} >Download</Button>



                        </Box>



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

}
