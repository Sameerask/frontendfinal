import { useEffect,useState } from "react";
import axios from 'axios'
import { Button, Input } from "@mui/material";
import { TableCell } from "@mui/material";
import { border } from "@mui/system";
import NavigationBar from "./Navigationbar";
function Allmedicines(){
     const[message,setMessage] = useState([]);
     useEffect(()=>{
        axios.get("http://localhost:9005/medicines").then((e)=>{
                setMessage(e.data);
     })
            },[]);
             return(
                 <div>
                     <h4> Medicine list</h4>
                     <table className="table table-bordered table-striped" style={{border: '2px solid black'}}>
                        <thead>
                         <tr scope="row" >
                             <th>Id</th>
                              <th>Name</th>
                              <th>STOCK</th>
                              <th>PRICE</th>
                              
                               </tr>
                               </thead>
                               {message.map((e)=>{
                                 return (
                                    <thead>
                                     <tr>
                                        <td>{e.id}</td>
                                         <td>{e.name}</td>
                                         <td>{e.stock}</td>
                                         <td>{e.price}</td>
                                         {/* <td>{e.minimumStock}</td> */}
                                         
                                    </tr> 
                                    </thead>
                                )
                    })} </table><NavigationBar/>
                    </div>
                )
    }
export default Allmedicines;