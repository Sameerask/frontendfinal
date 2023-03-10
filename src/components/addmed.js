import React from "react";
import NavigationBar from "./Navigationbar";
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Button,Input,Paper } from '@mui/material'
import { Link } from "react-router-dom";
function AddMed() {
  const [name,setname]=useState()
      const [description,setdescription]=useState()
      const [price,setprice]=useState()
      const [stock,setstock]=useState()
      const [minimum_stock,setminimum_stock]=useState()
      const [ message, setMessage ] = useState();
      const[navigationmessage,setNavigationMessage]=useState()
      const [namevalidation,setnameValidation]=useState()
      const [descriptionvalidation,setdescriptionValidation]=useState()
      const [pricevalidation,setpriceValidation]=useState()
      const [stockvalidation,setstockValidation]=useState()
      const [minimum_stockvalidation,setminimum_stockValidation]=useState()
      return (<div>

<Paper elevation={4} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3 style={{marginLeft : "35px"}} >Add Medicine</h3> <br/>

        Enter medicine name:<br/> 
         <Input type='text' value={name} data-testid="name"
          required onChange={(e)=>{setname(e.target.value)}} /><br/>
          <p style={{color:"red"}}>{namevalidation}</p>

        Enter description:<br/> 
        <Input type='text' value={description} data-testid="description"
        required onChange={(e)=>{setdescription(e.target.value)}} /><br/>
        <p style={{color:"red"}}>{descriptionvalidation}</p>

        Enter price:<br/>
        <Input type='number' value={price} data-testid="price"
        required onChange={(e)=>{setprice(e.target.value)}} /><br/>
        <p style={{color:"red"}}>{pricevalidation}</p>

        Enter stock:<br/> 
        <Input type='number'  value={stock} data-testid="stock"
        required onChange={(e)=>{setstock(e.target.value)}} /><br/>
        <p style={{color:"red"}}>{stockvalidation}</p>

        Enter minimum stock:<br/> 
        <Input type='number' value={minimum_stock} data-testid="minimum_stock"
        required onChange={(e)=>{setminimum_stock(e.target.value)}} /><br/>
        <p style={{color:"red"}}>{minimum_stockvalidation}</p>

                  
                 <Button style={{marginLeft:"50px"}} variant="contained" data-testid="addbtn"
                 onClick={()=>{

                    if(name==undefined)
                    {
                        setnameValidation("name is blank")
                    }
                    else
                    {
                        setnameValidation(" ")
                    }
                    if(stock==undefined)
                    {
                        setstockValidation("stock is blank")
                    }
                    else
                    {
                        setstockValidation(" ")
                    }
                    if(price==undefined)
                    {
                        setpriceValidation("price is blank")
                    }
                    else
                    {
                        setpriceValidation(" ")
                    }
                    if(description==undefined)
                    {
                        setdescriptionValidation("description is blank")
                    }
                    else
                    {
                        setdescriptionValidation(" ")
                    }
                    if(minimum_stock==undefined)
                    {
                        setminimum_stockValidation("minimum_stock is blank")
                    }
                    else
                    {
                        setminimum_stockValidation(" ")
                    }
                    //window.location.href = '/admin/dashboard';

                     var Medicine={
                        name:name,
                        description:description,
                        stock:stock,
                        price:price,
                        minimum_stock:minimum_stock
                        }
                         let url='http://localhost:9005/medicines/add'
                         
                          let headers={
                            'Content-Type':'application/json'
                        
                        }
                        axios.post(url,Medicine,{headers}).then((e)=>{
                            //setMessage(e.data)
                            setNavigationMessage("Medicine added")
                             console.log(e.data)
                            }).catch((e)=>{
                                 console.log(e)
                                })
                                setMessage("medicine added")
                            }}
                            >Add</Button>{navigationmessage} <div data-testid="message"> {message}</div></div></Paper><NavigationBar/>
                            </div>
                            )}
  


export default AddMed;