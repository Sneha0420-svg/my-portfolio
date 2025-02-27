import { Box, Grid, Typography,Button } from "@mui/material"
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import SendIcon from '@mui/icons-material/Send';




const Contact=()=>{
  

    
    return(
        <Box container >
          <Grid item sx={{height:"70px"}}></Grid>
          <Grid sx={{height:"200px",width:"200px"}}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.3OI0KC9E8WXIDZVqo-ajgQHaE2&pid=Api&P=0&h=180" alt="not found" />
            </Grid>
         
         
    <Grid container sx={{display:"flex",justifyContent:"space-evenly"}}>
     <Grid item lg={6} md={6} sm={12} sx={{width:"50%"}}>
     <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <AccountCircle sx={{ color: 'hsl(176, 68.10%, 50.80%)',mb:5 }} />
        <TextField fullWidth   helperText="Please enter your name" label="Enter your name" id="fullWidth" required />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LocalPhoneIcon sx={{ color: 'hsl(176, 68.10%, 50.80%)',mb:5 }} />
        <TextField fullWidth label="Ph.No" id="fullWidth"   required />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'hsl(176, 68.10%, 50.80%)',mb:5 }} />
        <TextField fullWidth label="Enter your E-mail id" id="fullWidth"  required />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <CreateIcon sx={{ color: 'hsl(176, 68.10%, 50.80%)',mb:5 }} />
        <TextField fullWidth label="Additional suggestion(optional)" id="fullWidth" />
      </Box>
       
      <Button variant="contained"   startIcon={<SendIcon/>} sx={{backgroundColor:"hsl(176, 68.10%, 50.80%)",marginLeft:"40%",marginTop:"10%"}} >Send Message</Button>


     </Grid>
     <Grid item lg={4} md={6} sm={6} sx={{marginTop:"-50px"}}>
     <img src="https://designfirst.in/wp-content/uploads/2019/12/gdz-contact-support-450x450.png" alt="not found" />

     </Grid>
    </Grid>
        </Box>
    )
}
export default Contact