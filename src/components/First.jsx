import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';



const First=()=>{
  return(
<Box sx={{height:"auto",width:"100%",backgroundImage:" linear-gradient(to right, #f7797d, #fbd786, #c6ffdd)"}}>
        <Grid container>
            <Grid item lg={6} md={6} sm={12} sx={{textAlign:"center"}}>
              <img style={{borderRadius:"200px",marginTop:"150px",boxShadow:"8px 8px 15px rgba(0, 0, 0, 0.5)"}} src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944" alt="not found" />
            <Box sx={{p:6}} > <Link to="https://www.instagram.com/"><InstagramIcon sx={{height:"40px",width:"40px"}}/></Link>  <Link to="https://www.facebook.com/"><FacebookIcon sx={{height:"40px",width:"40px"}}/></Link>  <Link to="https://x.com/i/flow/login?redirect_after_login=%2Fhome"><TwitterIcon sx={{height:"40px",width:"40px"}}/></Link>  <Link to="https://www.linkedin.com/"><LinkedInIcon sx={{height:"40px",width:"40px"}}/></Link></Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12}   sx={{textAlign:"center",lineHeight:"50px"}}>
              <Typography variant='h2' sx={{color:"rgb(125, 17, 17)",marginTop:"250px"}}><i> Hi I'm Sahaya Sneha</i></Typography>
              <Typography variant='h2' sx={{color:"wrgb(13, 161, 5)"}}><i>Full stack web developer</i></Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni distinctio cumque, culpa maiores, ea odio velit sed, corrupti et deleniti fugit? Numquam, hic. Nemo repellat, sapiente tempore, quisquam hic repellendus molestias commodi labore expedita culpa quibusdam mollitia dicta iste, officia in quod consequuntur ullam dolor. Ad saepe quasi amet repudiandae.</Typography>
             <Button variant="contained"   href='/Sneha Resume.pdf' download="Sneha Resume.pdf" startIcon={<DownloadIcon/>} sx={{backgroundImage:" linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)"}}>Download Resume</Button>
            </Grid>
            
        </Grid>
      </Box>
     
  )
  
}
export default First
