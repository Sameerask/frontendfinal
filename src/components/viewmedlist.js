import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewMedList(){

    const[message,setMessage] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9005/users/medicines").then((e)=>{
            setMessage(e.data);
            console.log(e.data);
        })
    },[]);

    return(
        <div>
            <h4><b>Available Medicines</b></h4>
        <table className="table table-bordered table-striped table-hover" style={{border: '2px solid black'}}>
            <thead>
                        <tr scope="row" >

                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            {/* <th>Place Order</th> */}
                        </tr>
                        </thead>
        {message.map((e)=>{
            return (
                    <thead>
                        <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.description}</td>
                                <td>{e.price}</td>
                        </tr>  
                        </thead>     
        )
        })}  </table>
        </div>
    )
}
export default ViewMedList;