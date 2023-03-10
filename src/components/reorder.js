import {useState,useEffect} from 'react'
import axios from 'axios'
import React from "react";
import { Button,Input,Paper } from '@mui/material'
function Reorder() {
  const[medicine_id,setmedicine_id]=useState()
    const[quantity,setquantity]=useState()
    const[status,setstatus]=useState()
    const [medicine_idValidation,setMedicine_idValidation]=useState()
    const [quantityValidation,setQuantityValidation]=useState()
    const [statusValidation,setStatusValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()
    const[message,setMessage]=useState()
    return(<div>

<Paper elevation={4} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3  >Reorder medicine</h3> <br/>
         Enter medicine_id : <br/>
         <Input type='number' data-testid="medicine_id" onChange={(e)=>{setmedicine_id(e.target.value)}}/><br/> 
         <p style={{color:"red"}}>{medicine_idValidation}</p>
         Enter quantity:<br/>
         <Input type='number' data-testid="quantity"onChange={(e)=>{setquantity(e.target.value)}}/><br/>
         <p style={{color:"red"}}>{quantityValidation}</p>
         Enter status:<br/>
         <Input type='text' data-testid="status" onChange={(e)=>{setstatus(e.target.value)}} /><br/>
         <p style={{color:"red"}}>{statusValidation}</p>
         <Button style={{marginLeft:"50px"}} variant="contained"  data-testid="Orderplaced"
         onClick={()=>{
            var Reorder={
                "medicine":{
                    "id":medicine_id
                },
                "quantity":quantity,
                "status":"status"
            }
            if(medicine_id==undefined)
            {
                setMedicine_idValidation("medicine_id  is blank")
            }
            else{
                setMedicine_idValidation("")
            }
            if(quantity==undefined)
            {
                setQuantityValidation("quantity is blank")
            }
            else{
                setQuantityValidation("")
            }
            if(status==undefined)
            {
                setStatusValidation("status  is blank")
            }
            else{
                setStatusValidation("")
            }
            let url='http://localhost:9005/ord/placereOrder'
            let headers={'Content-Type':'application/json'}
            axios.post(url,Reorder,{headers}).then((e)=>{
              setNavigationMessage(e.data)
                console.log(e.data)
                setMessage("reorder placed")
            }).catch((e)=>{console.log(e)
            })
        }}>Place Reorder</Button><br/>
        <p data-testid="res">{message}</p>
        {navigationmesasge}
        </div>
        </Paper>
        </div>)
}
export default Reorder;