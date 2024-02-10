import { Box, Button, Typography } from "@mui/material";
import pinkfish from "./images/pinkFish.png"
import orangefish from "./images/orangeFish.png"
import phoneWave from "./images/WaveMobile.png"
import wave from "./images/base.png"
import { useNavigate } from "react-router-dom";
import beautyfish from "./images/beautyFish.png"
export default function Container() {
  const navigate=useNavigate();
  return (<>
      <Box sx={{ display: 'flex' ,marginTop: { xs: '0', md: '4%', xl: '4%' }, alignItems: { xs: 'center', md: 'center', xl: "center" },marginLeft: { xs: '5%', md: '10%', xl: '10%' }, marginRight: '5%', height: '70vh',width:'90%',flexDirection:{ xs:'column',md:'row',xl:'row'},justifyContent:{xs:'center',md:'left',xl:'left'}}}>
            <Box sx ={{width:{xs:'default',md:"51vh",xl:"51vh"}}}>
          
          <Box sx={{display:{xs:'flex',md:'none',xl:'none'},justifyContent:'right',height:'140px'}}>
                <img src={pinkfish} height={180} width={200} alt="" />
          </Box>
        
                <Typography sx={{ fontSize: { xs: '180%', md: '198%', xl: '230%' }, textAlign: {xs:'center',md:'left',xl:'left'} }} >Turn Your Files to Fish !<br></br>
                    Access Them Seamlessly on any device </Typography>
                    <Box sx={{marginTop:'10%',display:'flex',justifyContent:"space-evenly"}}>
                    <Button sx={{color:'white',border:'solid 2px #52D9BB ',borderRadius:'8px',width:'130px',height:'40px',":hover":{ bgcolor:'#52D9BB',color:'#16162E'}} } onClick={()=>{navigate('/upload')}}>Upload </Button>
                    <Button sx={{color:'white',border:'solid 2px #52D9BB ',borderRadius:'8px',width:'130px',height:'40px',":hover":{ bgcolor:'#52D9BB',color:'#16162E'}}} onClick={()=>{navigate('/download')}}>Download</Button>
                    </Box>
    
                    <Box sx={{display:{xs:'flex',md:'none',xl:'none'},justifyContent:'left'}}>
                <img src={orangefish} height={150} width={200} alt="" />
          </Box>
            </Box>
            <Box sx={{display:{xs:'none',md:'flex',xl:'flex',marginLeft:'5%'}}}>
              <Box>
                <img src={pinkfish}height={400} width={400}></img>

              </Box>
              <Box sx={{display:{xs:'none',md:'flex',xl:'flex'},marginTop:"30vh"} } >
                <img src={orangefish} height={350} width={400}></img>
              </Box>
              <Box sx={{position:"absolute",marginLeft:'25vw'}} >
              <img src={beautyfish} height={350} width={400}></img>
              </Box>
            </Box>
           
        </Box>
        <Box sx={{display:{xs:'flex',md:'none',xl:'none',marginTop:"20%"},width:'100vw',alignItems:"flex-end"}}>
        <img src={phoneWave} height={70} width="100%" alt="" />
        </Box>
        <Box sx={{display:{xs:'none',md:'flex',xl:'flex'},width:'100vw',alignItems:"flex-end"}}>
        <img src={wave} height={100} width="100%" alt="" />
        </Box>
         
         
          </>
    )
}