  // import axios from 'axios'
  // import {useState,useEffect} from 'react'
  // import {Button,Input,Paper,Select} from "@mui/material";
  // import Allmedicines from './allmedicinelist';
  // function PlaceOrderForm()
  // {
  //   const [medicine_id,setMedicine_id]=useState()
  //   const [medicinename,setMedicineName]=useState()
  //   const [quantity,setQuantity]=useState()
  //   const [medicine_idValidation,setMedicine_idValidation]=useState()
  //   const[quantityValidation,setQuantityValidation]=useState()
  //   const [medicinenameValidation,SetMedicineNameValidation]=useState()
  //   const[navigationmessage,setNavigationMessage]=useState()
  //   const[message,setMessaage]=useState()
  //   const[medlist, setMedlist]=useState([])
  // const[selectedItem,setSelectedItem]=useState("select");
  //   const userid = sessionStorage.getItem("userid");
  //   useEffect(()=>{
  //     axios.get("http://localhost:9005/users/medicines")
  //     .then((response)=>{ 
  //     setMedlist(response.data)
  //     console.log(response.data)
  //     // setMessaage("Medicine Place ordered")
  //   });
  //   },[]);
    
  //   return(<div>
  //     <Paper elevation={5} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
  //             <div style={{marginLeft : "150px"}}>
  //             <h3 style={{marginLeft : "35px"}} >Place order</h3> <br/>
  //     Select Medicine Name
  //     <select className="form-control" onChange={(e)=>{ 
  //       console.log(e.target)
  //       console.log(e.target.value)
  //       console.log(medlist.find(o=> o.id == e.target.value))
  //       const selectedMedicine=medlist.find(o=> o.id == e.target.value)
  //     setMedicineName(selectedMedicine.name)
  //     setMedicine_id(selectedMedicine.id)
  //   }}>
  //       <option value="">Select Medicine</option>
  //       {medlist.map(e=>(
  //         <option value={e.id} id={e.id} key={e.id}>{e.name}</option>
  //       ))
  //       }
  //     </select>
  //  <br/> 
  //     <p style={{color:'red'}}>{medicinenameValidation}</p>
  //     Quantity <br/>
  //     <Input type="number" data-testid="quantity"onChange={(e)=>{ 
  //     setQuantity(e.target.value)
  //   }}/><br/>
  //   <p style={{color:'red'}}>{quantityValidation}</p>
  //   <Button style={{marginLeft:"50px"}} variant="contained"  data-testid="Orderplaced"
  //   onClick={()=>{
  //     console.log(medicine_id)
  //     console.log(medicinename);
  //     if(medicinename==undefined)
  //     SetMedicineNameValidation("medicine name is blank,please enter a value")
  //       if(quantity==undefined)
  //       setQuantityValidation("quantity is blank,please enter a value")
  //       var Placeorder={ medicine:{
  //         id:medicine_id,
  //         name:medicinename },
  //         quantity:quantity,
  //         user:{
  //           user_id:userid
  //         }
  //       }
  //         let url='http://localhost:9005/orders/placeOrder'
  //         let headers={'Content-Type':'application/json' }
  //         axios.post(url,Placeorder,{headers}).then((e)=>{
  //           setNavigationMessage(e.data)
  //           console.log(e.data)}).catch((e)=>{
  //             console.log(e)
  //           })
  //         }}
  //             >place Order</Button><br/>
  //             <p data-testid="res">{message}</p>
  //             {navigationmessage}
  //             </div>
  //             </Paper>
  //             </div>)}
  //             export default PlaceOrderForm;
import axios from 'axios'
import {useState,useEffect} from 'react'
import {Button,Input,Paper,Select} from "@mui/material";
import Allmedicines from './allmedicinelist';
import { StayCurrentLandscapeTwoTone } from '@mui/icons-material';
      function PlaceOrderForm()
      {
        const [medicine_id,setMedicine_id]=useState()
        const [medicinename,setMedicineName]=useState()
        const[paymentmethod,setPaymentMethod]=useState()
        const[paymentmethodValidation,SetPaymentMethodValidation]=useState()
        const [quantity,setQuantity]=useState()
        const [medicine_idValidation,setMedicine_idValidation]=useState()
        const[quantityValidation,setQuantityValidation]=useState()
        const [medicinenameValidation,SetMedicineNameValidation]=useState()
        const[navigationmessage,setNavigationMessage]=useState()
        const[message,setMessaage]=useState()
        const[amount,setAmount]=useState()
        const[amountValidation,setAmountValidation]=useState()
        const[medlist, setMedlist]=useState([])
        const[selectedItem,setSelectedItem]=useState("select");
        const userid = sessionStorage.getItem("userid");
        useEffect(()=>{
          axios.get("http://localhost:9005/users/medicines")
          .then((response)=>{
            setMedlist(response.data)
            console.log(response.data)
            // setMessaage("Medicine Place ordered")    
          });
        },[]);
        return(<div>
          <Paper elevation={5} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
              <h3 style={{marginLeft : "35px"}} >Place order</h3> <br/>
              Select Medicine Name
              <select className="form-control" onChange={(e)=>{
                console.log(e.target)
                console.log(e.target.value)
                console.log(medlist.find(o=> o.id == e.target.value))
                const selectedMedicine=medlist.find(o=> o.id == e.target.value)
                setMedicineName(selectedMedicine.name)
                setMedicine_id(selectedMedicine.id)
              }}>
                <option value="">Select Medicine</option>
                {medlist.map(e=>(
                <option value={e.id} id={e.id} key={e.id}>{e.name}</option>
                ))
                }
                </select>
                <br/>
                <p style={{color:'red'}}>{medicinenameValidation}</p>
                Quantity <br/>
                <Input type="number" data-testid="quantity"onChange={(e)=>{
                  setQuantity(e.target.value)
                }}/><br/>
                <p style={{color:'red'}}>{quantityValidation}</p>
                Amount <br/>
                <Input type="number" data-testid="Amount"onChange={(e)=>{
                  setAmount(e.target.value)
                }}/><br/>
                <p style={{color:'red'}}>{amountValidation}</p>
                Select Payment Mode<br/>
    <select value={paymentmethod} data-testid="method"  onChange={(e) => setPaymentMethod(e.target.value)}>
    <option value="">Select a payment method</option>
    <option value="credit card">Credit card</option>
    <option value="cash on delivery">cash on delivery</option>
    <option value="paypal">PayPal</option></select>
    <br/>
    <p style={{color:'red'}}>{paymentmethodValidation}</p>
                <Button style={{marginLeft:"50px"}} variant="contained" data-testid="Orderplaced"
                onClick={()=>{
                  console.log(medicine_id)
                  console.log(medicinename);
                  if(medicinename==undefined)
                  SetMedicineNameValidation("medicine name is blank,please enter a value")
                  if(quantity==undefined)
                  setQuantityValidation("quantity is blank,please enter a value")
                  if(amount==undefined)
                  setAmountValidation("amount is blank,please enter a value")
                  if(paymentmethod==undefined)
                  SetPaymentMethodValidation("Payment method is blank,please select a value")
                  var CurrentDate = new Date();
                  var Placeorder={ 
                    medicine:{
                      id:medicine_id,
                      name:medicinename         
                    },
                    quantity:quantity,
                    paymentmethod:paymentmethod,
                    user:{
                      user_id:userid
                    },
                    date: CurrentDate.toISOString()
                  }
                  let url='http://localhost:9005/orders/placeOrder'
                  let headers={'Content-Type':'application/json' }
                  axios.post(url,Placeorder,{headers}).then((e)=>{
                    setNavigationMessage(e.data)
                    console.log(e.data)}).catch((e)=>{
                      console.log(e)
                    })
                  }}
                  >place Order</Button><br/>
                  <p data-testid="res">{message}</p>
                  {navigationmessage}
                  </div>
                  </Paper>
                  </div>
                  )}
                
      export default PlaceOrderForm;