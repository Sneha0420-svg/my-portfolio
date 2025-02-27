import { Box ,Grid, Typography} from "@mui/material"
import React from "react"



const Skills=()=>{
    return(
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <Box >
               <Grid container sx={{height:"700px",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"linear-gradient(to right, #0f2027, #203a43, #2c5364)"}}>
                 <Grid item sx={{height:"80px",width:"100%"}}></Grid>
               
                 <Grid container  sx={{display:"flex",justifyContent:"center"}}>
                    <Grid  item lg={10} md={10} sm={10} xs={11} sx={{height:"600px",position:"relative"}}> 
                        <Grid sx={{height:"30%",width:"20%",position:"absolute",left:"40%",top:"5%"}}>
                        <img src="https://clipground.com/images/html-logo-png-3.png" class="img-fluid" alt="not found" style={{height:"98%"}}/>

                        </Grid>
                        <Grid sx={{height:"30%",width:"20%",position:"absolute",right:"16%",top:"25%"}}>
                        <img src="https://logospng.org/download/css-3/logo-css-3-2048.png" class="img-fluid"  alt="not found" style={{height:"98%"}}/>

                        </Grid>
                        <Grid sx={{height:"30%",width:"20%",position:"absolute",left:"18%",top:"25%"}}>
                        <img src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" class="img-fluid"  alt="not found" style={{height:"98%"}}/>

                        </Grid>
                       <Grid sx={{height:"30%",width:"20%",position:"absolute",top:"60%",left:"13%"}}>
                       <img src="https://static.vecteezy.com/system/resources/previews/012/697/297/large_2x/3d-bootstrap-programming-framework-logo-free-png.png" class="img-fluid"  alt="not found" style={{height:"98%"}}/>

                       </Grid>
                       <Grid sx={{height:"30%",width:"20%",position:"absolute",top:"60%",right:"13%"}}>
                       <img src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png" class="img-fluid" alt="not found" style={{height:"98%"}}/>

                       </Grid>
                       <Grid sx={{height:"60%",width:"30%",position:"absolute",top:"40%",right:"35%"}}>
                        <img src="https://content.timesjobs.com/img/62614057/Master.jpg" class="img-fluid" alt="not found" style={{height:"100%"}} />
                       </Grid>
                    </Grid>
                  



                 </Grid>
               </Grid>
        </Box>
        </>
    )
}
export default Skills