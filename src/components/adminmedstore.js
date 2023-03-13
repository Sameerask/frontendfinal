import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewMedStoreList(){

    const[message,setMessage] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9005/lists/medicalstore").then((e)=>{
            setMessage(e.data);
            console.log(e.data);
        })
    },[]);

    return(
        <div>
            <h4><b>Medical stores list</b></h4>
        <table className="table table-bordered table-striped table-hover" style={{border: '2px solid black'}}>
            <thead>
                        <tr scope="row" >

                            <th>Id</th>
                            <th>Medical Store Name</th>
                            <th>Area</th>
                            <th>Emergency request</th>
                            <th>User id</th>
                            <th>User name</th>
                            {/* <th>Place Order</th> */}
                        </tr>
                        </thead>
        {message.map((e)=>{
            return (
                    <thead>
                        <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.area}</td>
                                <td>{e.emergencyRequest}</td>
                                <td>{e.user!=undefined?e.user.user_id:" "}</td>
                                <td>{e.user!=undefined?e.user.username:" "}</td>
                        </tr>  
                        </thead>     
        )
        })}  </table>
        </div>
    )
}
export default ViewMedStoreList;