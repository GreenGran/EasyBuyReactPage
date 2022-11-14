import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      purple: {
        main: '#BA94D1',
        contrastText: '#fff',
      },
    },
  });


function BottomButtons() {
     {/* ofcouse buttons dont do anything now but will in the final product */}
      {/*button will be enabled when there are more then 10 items */}
  return (
  
    <ThemeProvider theme={theme}>
    <Box 
       style={{height:"10vh"}} >
      <ButtonGroup disabled={true} variant="contained" aria-label="outlined button group" fullWidth = {true} color = "purple" sx={{gap:10 ,borderRadius: 20,boxShadow : "0px 0px 0px 0px"}}>
      <Button style={{borderRadius: 20,fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}} startIcon={<NavigateBeforeIcon  style={{ color: 'Black', borderRadius : "0",float:"top"}}/>}>עמוד קודם</Button>
       
        <Button style={{borderRadius: 20,fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}}  >עמוד ראשון</Button>
        <p style={{fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}}>  עמוד מספר <span style={{fontSize: "x-large",fontWeight: "bold",color:"black", margin:"0"}}>1</span></p>
        <Button  style={{borderRadius: 20,fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}} >עמוד אחרון</Button>
       
        <Button style={{borderRadius: 20,fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}}  endIcon={<NavigateNextIcon  style={{ color: 'Black', borderRadius : "0",float:"top"}}/>}>עמוד הבא</Button>
      </ButtonGroup>
      
    </Box>
    </ThemeProvider>
  );
 
}
export default BottomButtons;