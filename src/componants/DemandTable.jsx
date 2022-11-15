import React, { useState, useEffect } from 'react';
import TableTop from './TableTop';
import TableItem from './TableItem';
import TopContainer from './TopContainer';
import TableBottom from './TableBottom';
import BottomButtons from './BottomButtons';


const DBarry = [{  // in the product the info will be pulled from the DB
    status : "1",
    price : "10₪",
    confirmationNum : "",
    amount : "20",
    desc : "עטים",
    num : "1",
},
{
    status : "2",
    price : "400₪",
    confirmationNum : "2352458462DA",
    amount : "1",
    desc : "מיקרוגל",
    num : "2",
},
{
    status : "4",
    price : "4000₪",
    confirmationNum : "",
    amount : "10",
    desc : "כיסאות משרד",
    num : "3",
}];



function arrayLowerThenTen(arry){
   //this func is to fill the page so it allways has 10 requests, will no be in use if the DB has more then 10 items in it
        for (let i = arry.length; i < 10; i++) {
            arry.push(
                {
                    status : "0",
                    price : "",
                    confirmationNum : "",
                    amount : "",
                    desc : "",
                    num : i+1,
                }
            );
 
    }
}
    


function DemandTable() {
    
 
   
      
      return (
        <div style={{backgroundColor: "#7F669D"}}>
      <div  style={{padding : 25,backgroundColor: "#7F669D"}}>
     {arrayLowerThenTen(DBarry)}
        <TableTop/>
        {
            
            DBarry.map((elements,index)=>{
               return (
                    <TableItem
                            key = {index}
                            status = {elements.status}
                            price = {elements.price}
                            amount = {elements.amount}
                            desc = {elements.desc}
                            num = {elements.num}   
                            confirmationNum ={elements.confirmationNum} />
               )
            })
            
        }
        
      </div>
      <BottomButtons/>
      <TableBottom/>
        
      </div>
    );
  }
  
  export default DemandTable;