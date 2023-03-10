import { useEffect,useState } from "react";
import axios from "axios";
function Reorders(){
    const[message,setMessage] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9005/ord/allreorders").then((e)=>{
            setMessage(e.data);
            console.log(e.data)
    })
    },[]);
    return(
        <div>
            <h4><b>Requested reorders</b></h4>
            <table className="table table-bordered table-striped" style={{border: '2px solid black'}}>
                <thead>
                            <tr scope="row" >
                                <th>Id</th>
                                {/* <th>User Id</th>
                                <th>Username</th> */}
                                <th>Medicine Id</th>
                                <th>Medicine Name</th>
                                <th>quantity</th>
                            </tr>
                            </thead>
            {message.map((e)=>{
                return (
                        <thead>
                            <tr>
                                    <td>{e.id}</td>
                                    {/* <td>{e.user!=undefined?e.user.user_id:" "}</td>
                                    <td>{e.user!=undefined?e.user.username:" "}</td> */}
                                    <td>{e.medicine.id}</td>
                                    <td>{e.medicine.name}</td>
                                    <td>{e.quantity}</td>
                            </tr> 
                            </thead>      
            )
            })}  </table>
            </div>
            )
    }
    export default Reorders;