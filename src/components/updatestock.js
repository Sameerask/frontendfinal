// import {useState,useEffect} from 'react'
// import { Button, input,Paper } from "@mui/material";
// import axios from 'axios'
// import NavigationBar from "./Navigationbar";
// import { Link } from "react-router-dom";
// function Update(){
//      const [name,setname]=useState()
//       const [description,setdescription]=useState()
//       const [price,setprice]=useState()
//       const [stock,setstock]=useState()
//       const [minimum_stock,setminimum_stock]=useState()
//       const [namevalidation,setnameValidation]=useState()
//       const [descriptionvalidation,setdescriptionValidation]=useState()
//       const [pricevalidation,setpriceValidation]=useState()
//       const [stockvalidation,setstockValidation]=useState()
//       const [minimum_stockvalidation,setminimum_stockValidation]=useState()
      
//       return (<div>
//  <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
//             <div style={{marginLeft : "150px"}}>
//             <h3 style={{marginLeft : "35px"}} >updatestock</h3> <br/>



//          Enter name: <input type='text' required onChange={(e)=>{setname(e.target.value)}}/><br/>
//               Enter description: <input type='text' required onChange={(e)=>{setdescription(e.target.value)}} /><br/>
//                   Enter price: <input type='numbers' required onChange={(e)=>{setprice(e.target.value)}} /><br/>
//                  Enter stock: <input type='numbers' required onChange={(e)=>{setstock(e.target.value)}} /><br/>
//                  Enter minimum_stock: <input type='numbers' required onChange={(e)=>{setminimum_stock(e.target.value)}} /><br/>
//                  <p style={{color:"red"}}>{namevalidation}</p> 
//         <p style={{color:"red"}}>{stockvalidation}</p> 
//         <p style={{color:"red"}}>{pricevalidation}</p>
//         <p style={{color:"red"}}>{descriptionvalidation}</p> 
//         <p style={{color:"red"}}>{minimum_stockvalidation}</p> 

//                  <Button variant='outlined'

//                  onClick={()=>{
//                     if(name==undefined)
//                     {
//                         setnameValidation("name is blank")
//                     }
//                     else
//                     {
//                         setnameValidation(" ")
//                     }
//                     if(stock==undefined)
//                     {
//                         setstockValidation("stock is blank")
//                     }
//                     else
//                     {
//                         setstockValidation(" ")
//                     }
//                     if(price==undefined)
//                     {
//                         setpriceValidation("price is blank")
//                     }
//                     else
//                     {
//                         setpriceValidation(" ")
//                     }
//                     if(description==undefined)
//                     {
//                         setdescriptionValidation("description is blank")
//                     }
//                     else
//                     {
//                         setdescriptionValidation(" ")
//                     }
//                     if(minimum_stock==undefined)
//                     {
//                         setminimum_stockValidation("minimum_stock is blank")
//                     }
//                     else
//                     {
//                         setminimum_stockValidation(" ")
//                     }
//                     window.location.href = '/admin/dashboard';
//                      var Medicine={
//                         name:name,
//                         description:description,
//                         stock:stock,
//                         price:price,
//                         minimum_stock:minimum_stock
//                         }
//                          let url='http://localhost:9005/medicines/2'
//                           let headers={
//                             'Content-Type':'application/json'
//                         }
//                         axios.put(url,Medicine,{headers}).then((e)=>{
//                              console.log(e.data)
//                             }).catch((e)=>{
//                                  console.log(e)
//                                 })
//                             }}
//                             >Update</Button></div></Paper><NavigationBar/>
//                             </div>
//                             )}
                            
// export default Update
import {useState,useEffect} from 'react'
import { Button, Input,Paper } from "@mui/material";
import axios from 'axios'
import NavigationBar from "./Navigationbar";
import { Link } from "react-router-dom";
function Update(){
     const [id,setId]=useState()
      const [description,setdescription]=useState()
      const [price,setprice]=useState()
      const [stock,setstock]=useState()
      const [minimum_stock,setminimum_stock]=useState()
      const [ navmessage, setnavMessage ] = useState();
      const [ message, setMessage ] = useState();
      const [idvalidation,setidValidation]=useState()
      const [descriptionvalidation,setdescriptionValidation]=useState()
      const [pricevalidation,setpriceValidation]=useState()
      const [stockvalidation,setstockValidation]=useState()
      const [minimum_stockvalidation,setminimum_stockValidation]=useState()
      
      return (<div>
 <Paper elevation={4} style={{marginTop : "10px", width: "500px", marginLeft:"200px"}}>
            <div style={{marginLeft : "150px"}}>
            <h3 style={{marginLeft : "35px"}} >Update stock</h3> <br/>



         Enter medicine id:<br/>
         <Input type='number' required  value={id} data-testid="id"
         onChange={(e)=>{setId(e.target.value)}}/><br/>
         <p style={{color:"red"}}>{idvalidation}</p> 
        
        {/* Enter description:<br/>
         <Input type='text'  value={description} data-testid="description"
            required onChange={(e)=>{setdescription(e.target.value)}} /><br/>
            <p style={{color:"red"}}>{descriptionvalidation}</p>

         Enter price:<br/>
        <Input type='numbers'  value={price} data-testid="price"
         required onChange={(e)=>{setprice(e.target.value)}} /><br/>
         <p style={{color:"red"}}>{pricevalidation}</p> */}

        Enter stock:<br/> 
        <Input type='numbers' value={stock} data-testid="stock"
         required onChange={(e)=>{setstock(e.target.value)}} /><br/>
         <p style={{color:"red"}}>{stockvalidation}</p>
                 
        {/* Enter minimum_stock: <br/>
        <Input type='numbers'  value={minimum_stock} data-testid="minimum_stock"
        required onChange={(e)=>{setminimum_stock(e.target.value)}} /><br/>
        <p style={{color:"red"}}>{minimum_stockvalidation}</p>  */}

                 <Button style={{marginLeft:"50px"}} variant="contained" data-testid="addbtn"

                 onClick={()=>{
                    if(id==undefined)
                    {
                        setidValidation("name is blank")
                    }
                    else
                    {
                        setidValidation(" ")
                    }
                    if(stock==undefined)
                    {
                        setstockValidation("stock is blank")
                    }
                    else
                    {
                        setstockValidation(" ")
                    }
                    // if(price==undefined)
                    // {
                    //     setpriceValidation("price is blank")
                    // }
                    // else
                    // {
                    //     setpriceValidation(" ")
                    // }
                    // if(description==undefined)
                    // {
                    //     setdescriptionValidation("description is blank")
                    // }
                    // else
                    // {
                    //     setdescriptionValidation(" ")
                    // }
                    // if(minimum_stock==undefined)
                    // {
                    //     setminimum_stockValidation("minimum_stock is blank")
                    // }
                    // else
                    // {
                    //     setminimum_stockValidation(" ")
                    // }
                    // window.location.href = '/admin/dashboard';
                    //  var Medicine={
                        
                       
                    //     stock:stock
                        
                    //     }
                    var formData= new FormData();
                    formData.append("stock",parseInt(stock));
                        //  let url='http://localhost:9005/medicines/${id}/stock'
                        //   let headers={
                        //     'Content-Type':'application/json'
                        // }
                        axios.put(`http://localhost:9005/medicines/${id}/stock`,formData).then((e)=>{
                             console.log(e.data)
                             setnavMessage("stock updated")
                            }).catch((e)=>{
                                 console.log(e)
                                 setnavMessage("Medicine id not found")
                                })
                                setMessage("stock updated")
                            }}
                            >Update</Button>{navmessage}<div data-testid="message"> {message}</div></div></Paper><NavigationBar/>
                            </div>
                            )}export default Update