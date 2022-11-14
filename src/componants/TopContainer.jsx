import * as React from 'react';
import Container from '@mui/material/Container';


const containerStyle = {
    backgroundColor : "#BA94D1",
    top: "0",
    maxWidth: "100%",
    height:"10vh",
   // borderTopLeftRadius: "10%",
   
    borderTopLeftRadius: "80px 80px",
    borderTopRightRadius: "80px 80px",
    paddingRight: "30px",
}

function TopContainer() {
    return (
      <div >
      <Container fixed style={containerStyle} >  
      <p style={{float:"left",height: "40px",fontSize: "x-large",fontWeight: "bold",margin:"0",paddingTop:"1%"}}>EasyBuy</p>
      <p style ={{ height: "40px",fontSize: "x-large",fontWeight: "bold"}} >
        שלום
        <br></br>
        זוהר {/*in the final prodact name will be pulled out of the DB */}
      </p>
     
      </Container>
      
      </div>
    );
  }
  
  export default TopContainer;