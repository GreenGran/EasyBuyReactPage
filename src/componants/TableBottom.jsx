import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 0,
  paddingLeft: 0,
  textAlign: 'center',
  borderRadius : 0,
  color: "black",
  height:"100%",
  boxShadow : "0px 0px 0px 0px"
 
}));

function TableBottom() {
    return (
      <div >
        <Grid container spacing={0} style={{height:"100%",borderRadius: 200 }}>
  <Grid item xs={8} style  = {{backgroundColor:"#FBFACD"}} >
    <Item style ={{ height:"100%",fontSize: "x-large",fontWeight: "bold",borderBottomLeftRadius: "80px 80px",backgroundColor:"#BA94D1"}} > 
    <p  style ={{ fontSize: "large",fontWeight: "bold",color:"black", margin:"0"}}> שארית תקציב שנתי לבקשות </p>
    <p  style ={{ fontSize: "x-large",fontWeight: "bold",color:"black", margin:"0"}}>8571₪ </p>{/* in the final product this will be taken for the DB */}
    </Item>
  </Grid>
  <Grid item xs={4}  style  = {{backgroundColor:"#FBFACD"}}>
    <Item  style  = {{backgroundColor:"#FBFACD",boxShadow: "0"}} >
    
    <Button  
    startIcon={<AddIcon  style={{ color: 'Black', borderRadius : "0"}}/>} style={{paddingRight:"0",backgroundColor:"#5AA469",height:"100%",width:"100%",borderRadius : "0",borderBottomRightRadius: "80px 80px"}}>
    <p style ={{ fontSize: "large",fontWeight: "bold",color:"black"}} > הוסף בקשה</p>
    </Button>
   
    </Item>
  </Grid>
  
</Grid>
      </div>
    );
  }
  
  export default TableBottom;