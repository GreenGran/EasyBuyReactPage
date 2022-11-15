import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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

function TableTop() {
    return (
      <div >
        <Grid container spacing={2}>
  <Grid item xs={2} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >סטטוס</Item>
  </Grid>
  <Grid item xs={2} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >מספר הזמנה</Item>
  </Grid>
  <Grid item xs={2} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >מכיר</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >כמות</Item>
  </Grid>
  <Grid item xs={3} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >תיאור</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >מספר</Item>
  </Grid>
  <Grid item xs={1} style={{paddingLeft : 0}}>
    <Item  style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}}  >מחיקה </Item>
  </Grid>
</Grid>
      </div>
    );
  }
  
  export default TableTop;