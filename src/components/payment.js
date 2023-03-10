import {useState,useEffect} from 'react'
import axios from 'axios'
import {Button,Input,Paper} from "@mui/material";
function PayyForm()
{
  const [orderid,setOrderid]=useState()
  const [amount,setAmount]=useState()
  const [method,setMethod]=useState()
  const [orderidValidation,setOrderidValidation]=useState()
  const[amountValidation,setAmountValidation]=useState()
  const[methodValidation,setMethodValidation]=useState()
  const[navigationmessage,setNavigationMessage]=useState()
  const[message,setMessage]=useState()
  const[show,setShow]=useState(true);
  return(
  <div>
    <Paper elevation={5} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3 >Choose payment mode</h3> <br/>
    Enter order id <br/>
    <Input type="number" data-testid="orderid"  onChange={(e)=>{
    setOrderid(e.target.value) 
     }}/><br/>
  <p style={{color:'red'}}>{orderidValidation}</p>
  Amount<br/>
  <Input type="number" data-testid="amount" onChange={(e)=>{
  setAmount(e.target.value)
 }}/><br/>
  <p style={{color:'red'}}>{amountValidation}
  </p>Payment Mode<br/>
    <select value={method} data-testid="method"  onChange={(e) => setMethod(e.target.value)}>
    <option value="">Select a payment method</option>
    <option value="credit card">Credit card</option>
    <option value="cash on delivery">cash on delivery</option>
    <option value="paypal">PayPal</option></select>
    <p style={{color:'red'}}>{methodValidation}</p>
    <Button style={{marginLeft:"50px"}} variant="contained" data-testid="pay" 
    onClick={()=>{
    if(orderid==undefined)
    {
      setOrderidValidation("order id is blank")
    }
    if(amount==undefined)
    {
      setAmountValidation("amount is blank")
    }
    if(method==undefined)
    {
      setMethodValidation("method is blank")
    }
   
    var formData = new FormData();
    formData.append("id",orderid);
    formData.append("amount",amount);
    formData.append("method",method);
    let url="http://localhost:9005/payment/make"
    let headers={'Content-Type':'application/json'
  }
  axios.post("http://localhost:9005/payment/make",formData,headers).then((e)=>{
    if(e.status==200){
      setShow(false);
    }else{
      setShow(true);
    }
    console.log(e.data)
    //setMessage("reorder placed")
  }).catch((e)=>{
      console.log(e)})}}
      >Make Payment</Button>
      <p hidden={show}>Payment mode choosed successful</p>
      <p data-testid="res">{message}</p>
      </div>
      </Paper>
      </div>
      )}
    
export default PayyForm