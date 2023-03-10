import {useState,useEffect} from 'react'
import axios from 'axios'
import {Button,Input,Paper} from "@mui/material";
function RForm()
{
const [medicine_id,setMedicine_id]=useState()
const [medicinename,setMedicineName]=useState()
const [quantity,setQuantity]=useState()
const [medicine_idValidation,setMedicine_idValidation]=useState()
const [medicinenameValidation,SetMedicineNameValidation]=useState()
const [quantityValidation,setQuantityValidation]=useState()
const[navigationmessage,setNavigationMessage]=useState()
const[medlist, setMedlist]=useState([])
const[message,setMessage]=useState();
useEffect(()=>{
   axios.get("http://localhost:9005/users/medicines")
   .then((response)=>{ 
   setMedlist(response.data)
   console.log(response.data)
   setMessage("requestreordered")
 });
 },[]);
return(<div>
     <Paper elevation={5} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3 style={{marginLeft : "35px"}} >Make reorder request</h3> <br/>
    Select Medicine Name
    <select className="form-control" data-testid="medicinename" onChange={(e)=>{ 
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


    <p style={{color:'red'}}>{medicinenameValidation}</p>
    Enter Quantity <br/>
      <Input type="number" data-testid="quantity" onChange={(e)=>{
      setQuantity(e.target.value)}}/><br/>
      <p style={{color:'red'}}>{quantityValidation}</p>
     <Button style={{marginLeft:"50px"}} variant="contained" data-testid="Reorderplaced"
     onClick={()=>{
        if(medicine_id==undefined)
        setMedicine_idValidation("medicine id is blank,please enter value")
      if(medicinename==undefined)
      SetMedicineNameValidation("medicine name is blank,please enter a value")
        if(quantity==undefined)
        setQuantityValidation("quantity is blank,please enter a value")
       var Reorder={ medicine:{
        id:medicine_id,
      medicinename:medicinename},
        quantity:quantity,
        }
        let url='http://localhost:9005/ord/placereOrder'
        let headers={'Content-Type':'application/json' }
        axios.post(url,Reorder,{headers}).then((e)=>{ 
        console.log(e.data)
        setNavigationMessage(e.data)
      }).catch((e)=>{
        console.log(e)})}}
        >Place reorder</Button><br/>
        <p data-testid="res">{message}</p>
        {navigationmessage}
        </div>
        </Paper>
        </div>)}
        export default RForm