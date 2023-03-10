import axios from "axios";
import { useEffect,useState } from "react";
function AllLowStock(){
    const[message,setMessage] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9005/medicines/low-stock").then((e)=>{
            setMessage(e.data);
        })
    },[]);
    return(
    <div>
        <h4><b>Low Stock Medicines</b></h4>
        <table className="table table-bordered table-striped" style={{border: '2px solid black'}}>
            <thead>
                        <tr scope="row" >
                            <th><b>Id</b></th>
                            <th><b>Name</b></th>
                            <th><b>Stock</b></th>
                            
                            
                        </tr>
                        </thead>
        {message.map((e)=>{
            return (
                    <thead>
                        <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.stock}</td>
                        </tr> 
                        </thead>      
        )
        })}  </table>
        </div>
        )
        
    }
    export default AllLowStock;