import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About=()=>{
   return(
    <Box  sx={{backgroundImage:"linear-gradient(to right, #c31432, #240b36)"}}>
      <Grid container>
      <Grid item lg={7} md={6} sm={12} sx={{height:"700px",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <Grid sx={{height:"70px",width:"100%"}}> 
         <Typography variant='h4' sx={{color:"yellow",textAlign:"center"}}><b>About <span style={{color:"hsl(176, 68.10%, 50.80%)"}}>Me</span></b> !</Typography>
       </Grid>
       <Grid sx={{height:"auto",width:"100%",lineHeight:"100px",textAlign:"center",color:"white"}} >
         <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam possimus iusto, cum, amet, quas nihil quo accusantium blanditiis voluptatum corporis nulla ea! Ipsa ducimus beatae laudantium esse est, nam quaerat nostrum, expedita accusamus perferendis repudiandae nemo officia veniam aperiam rerum distinctio architecto saepe? Aspernatur unde doloremque, quae adipisci esse, eaque, hic consectetur voluptate sunt impedit architecto dolorum ipsum repudiandae numquam.</Typography>
        
       </Grid >
       <Button variant="contained" endIcon={<ArrowForwardIcon/>}sx={{backgroundColor:"hsl(176, 68.10%, 50.80%)",borderRadius:"50px",mt:5}}>Readmore</Button>
       </Grid>
       
       <Grid item lg={5} md={6} sm={12} sx={{height:"700px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
         <Grid sx={{height:"300px",aspectRatio: "1/cos(30deg)",clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",backgroundColor: "hsl(176, 68.10%, 50.80%)",boxShadow:"8px 8px 15px hsl(176, 68.10%, 50.80%)"}}>
           <img src="https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944" alt="not found" style={{height:"290px",aspectRatio: "1/cos(30deg)",clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)"}}/>
         </Grid>
      </Grid>
      </Grid>
    </Box>
   )
}
export default About