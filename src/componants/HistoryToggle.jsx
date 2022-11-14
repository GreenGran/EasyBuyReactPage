import * as React from 'react';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Color switch demo' } };

function HistoryToggle() {
    return (
        
        <div style={{backgroundColor: "#7F669D"}}>
        <div style={{float: "right",paddingRight:"2%"}}>
    <p style={{padding: "0",margin:"0",height: "20px",fontSize: "large",fontWeight: "bold"}}>הצג היסטוריה</p>
      <Switch  {...label}  color="secondary" label="Start" />
      <p style={{padding: "0",margin:"0",height: "20px",fontSize: "large",fontWeight: "bold"}}>כן / לא</p>
    </div>
    </div>
      );
  }
  
  export default HistoryToggle;