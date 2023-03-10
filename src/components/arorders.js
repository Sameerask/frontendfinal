import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button,Input,Paper } from '@mui/material'
function AcceptRejectOrder() {
  const[medicine_id,setmedicine_id]=useState()
    const[quantity,setquantity]=useState()
    //const[status,setstatus]=useState()
    const[order_id,setorder_id]=useState()
    const[user_id,setuser_id]=useState()
    const [medicine_idValidation,setMedicine_idValidation]=useState()
    const [quantityValidation,setQuantityValidation]=useState()
    //const [statusValidation,setStatusValidation]=useState()
    const [user_idValidation,setUser_idValidation]=useState()
    const [order_idValidation,setOrder_idValidation]=useState()
    const [navigationmesasge,setNavigationMessage]=useState()
    return(<div>

<Paper elevation={4} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3  >Requested orders</h3> <br/>
         Enter medicine Id : <br/>
         <Input type='number' onChange={(e)=>{ setmedicine_id(e.target.value)}}/><br/> 
         <p style={{color:"red"}}>{medicine_idValidation}</p>
         Enter quantity:<br/>
         <Input type='number' onChange={(e)=>{setquantity(e.target.value)}}/><br/>
         <p style={{color:"red"}}>{quantityValidation}</p>
         {/* Enter status:<input type='text' onChange={(e)=>{ setstatus(e.target.value)}} /><br/>
         <p style={{color:"red"}}>{statusValidation}</p> */}
         Enter user id:<br/>
         <Input type='number' onChange={(e)=>{setuser_id(e.target.value)}}/><br/>
         <p style={{color:"red"}}>{user_idValidation}</p>
         Enter order ID:<br/>
         <Input type='number' onChange={(e)=>{ setorder_id(e.target.value)}} /><br/>
         <p style={{color:"red"}}>{order_idValidation}</p>
         <Button style={{marginLeft:"50px"}} variant="contained"
         onClick={()=>{
            var Orderaccept={
                "medicine":{
                    "id":medicine_id,
                },
                "order_id":order_id,
                "quantity":quantity,
                user:{
                    user_id:user_id
                  }
            
            }
            if(medicine_id==undefined)
            {
                setMedicine_idValidation("medicinename  is blank")
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
            // if(status==undefined)
            // {
            //     setStatusValidation("status  is blank")
            // }
            // else{
            //     setStatusValidation("")
            // }
            if(user_id==undefined)
            {
                setUser_idValidation("user_id is blank")
            }
            else{
                setOrder_idValidation("")
            }
            if(order_id==undefined)
            {
                setOrder_idValidation("order_id is blank")
            }
            else{
                setOrder_idValidation("")
            }
            let url='http://localhost:9005/orders/accept'
            let headers={'Content-Type':'application/json'}
            axios.put(url,Orderaccept,{headers}).then((e)=>{
              setNavigationMessage(e.data)
                console.log(e.data)
            }).catch((e)=>{console.log(e)
            })
        }}>Accept/Reject</Button><br/>
        {navigationmesasge}
        </div>
        </Paper>
        </div>)
// const[medicine_id,setmedicine_id]=useState()
//     const[quantity,setquantity]=useState()
//     // const[status,setstatus]=useState()
//     const[order_id,setorder_id]=useState()
//     const [medicine_idValidation,setMedicine_idValidation]=useState()
//     const [quantityValidation,setQuantityValidation]=useState()
//     //const [statusValidation,setStatusValidation]=useState()
//     const [order_idValidation,setOrder_idValidation]=useState()
//     const [navigationmessage,setNavigationMessage]=useState()
//     const[message,setMessaage]=useState()
//     return(<div>
//          Enter medicine_id : <input type='number' data-testid="medicine_id" onChange={(e)=>{ setmedicine_id(e.target.value)}}/><br/> 
//          <p style={{color:"red"}}>{medicine_idValidation}</p>
//          Enter quantity:<input type='number' data-testid="quantity" onChange={(e)=>{setquantity(e.target.value)}}/><br/>
//          <p style={{color:"red"}}>{quantityValidation}</p>
//          Enter order_id:<input type='number' data-testid="order_id" onChange={(e)=>{setorder_id(e.target.value)}}/><br/>
//          <p style={{color:"red"}}>{order_idValidation}</p>
//          <Button variant="outlined"  data-testid="orderaccept"
//          onClick={()=>{
//             var Orderaccept={
                
//                 "medicine":{
//                     "id":medicine_id,
//                 },
//                 "order_id":order_id,
//                 "quantity":quantity
//                 //"status":"status"
//             }
//             if(medicine_id==undefined)
//             {
//                 setMedicine_idValidation("medicine_id is blank")
//             }
//             else{
//                 setMedicine_idValidation("")
//             }
//             if(quantity==undefined)
//             {
//                 setQuantityValidation("quantity is blank")
//             }
//             else{
//                 setQuantityValidation("")
//             }
//             //if(status==undefined)
//             //{
//                 //setStatusValidation("status  is blank")
//             //}
//             //else{
//                 //setStatusValidation("")
//            // }
//             if(order_id==undefined)
//             {
//                 setOrder_idValidation("order_id is blank")
//             }
//             else{
//                 setOrder_idValidation("")
//             }
//             let url='http://localhost:9005/orders/accept'
//             let headers={'Content-Type':'application/json'}
//             axios.post(url,Orderaccept,{headers}).then((e)=>{
//                 setNavigationMessage(e.data)
//                 console.log(e.data)}).catch((e)=>{
//                 console.log(e)
//                 setMessaage("order accept/reject")
//             })
//             }}
//             >Orderaccept</Button><br/>
//             <p data-testid="res">{message}</p>
//             {navigationmessage}
            

//         </div>)
    }
export default AcceptRejectOrder;