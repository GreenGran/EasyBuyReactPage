import * as React from 'react';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      purple: {
        main: '#BA94D1',
        contrastText: '#fff',
      },
    },
  });

/*
* will be functinal in the final product
*/

function ToPDF() {
    return (
        <ThemeProvider theme={theme}>
        <div style={{backgroundColor: "#7F669D"}}>
   <Button color = "purple"  variant="contained" style={{borderRadius: 20,fontSize: "large",fontWeight: "bold",color:"black", marginRight:"1%",marginTop:"1%",float:"right",height:"80px"}}
     endIcon={<PictureAsPdfIcon  style={{ color: 'Black', borderRadius : "0",padding:"1%"}}/>}>PDF-ייצא כ
     </Button>
    </div>
    </ThemeProvider>
      );
  }
  
  export default ToPDF;