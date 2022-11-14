import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: 0,
  paddingLeft: 0,
  textAlign: 'center',
  borderRadius : 0,
  color: "black",
  borderStyle: "solid"
}));

function statusIdToText(status){ // in the prodact statusId test will be pulled from DB
    let statusReport = "error";
   
    switch (status) {
        case "0":// waiting for approval
        statusReport = "";
        break;
        case "1":// waiting for approval
        statusReport = "ממתין לאישור";
            break;
        case "2":// approved waiting for goods
         statusReport = "אושר ממתין למוצרים להגיעה";
            break;
        case "3":// please inspect goods and report
         statusReport = "לבדוק מוצרים לדווח";
            break;
        case "4":// denied
         statusReport = "לא מאושר";
            break;
    
        default:
            break;
    }
    
    return statusReport;
}
function BackgroundColorChanger(status){ // in the prodact statusId test will be pulled from DB
    let statusColor = "error";
   
    switch (status) {
        
          
        case "1":// waiting for approval
        statusColor = "#F8FFDB";
            break;
        case "2":// approved waiting for goods
        statusColor = "#B3FFAE";
            break;
        case "3":// please inspect goods and report
        statusColor = "#BA94D1";
            break;
        case "4":// denied
        statusColor = "#FF6464";
            break;
    
        default:
            break;
    }
    
    return statusColor;
}



function TableItem(props) {
    return (
      <div  >
        <Grid container spacing={2}  >
  <Grid item xs={2} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold",backgroundColor:BackgroundColorChanger(props.status) }} >
     {statusIdToText(props.status)}
     </Item>
  </Grid>
  <Grid item xs={2} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >{props.price}</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >{props.amount}</Item>
  </Grid>
  <Grid item xs={5} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >{props.desc}</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >{props.num}</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >
    <Button   disabled={props.status > "1" ? true : false} startIcon={<BackspaceIcon  style={{ color: 'Black', borderRadius : "0"}}/>} style={{paddingRight:"0",backgroundColor:props.status > "1" ? "#808080" : "#EF4B4B",height:"100%",width:"100%",borderRadius : "0"}}>
      </Button>
</Item>
  </Grid>

</Grid>
      </div>
    );
  }
  
  export default TableItem;