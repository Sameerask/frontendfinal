import { useEffect,useState } from "react";
import axios from "axios";
function Orders(){
    const[message,setMessage] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9005/orders/allOrders").then((e)=>{
            setMessage(e.data);
            console.log(e.data)
        })
    },[]);
    return(
        <div>
            <h4><b>Orders placed by user</b></h4>
            <table className="table table-bordered table-striped" style={{border: '2px solid black'}}>
                <thead>
                            <tr scope="row" >
                                <th>Order Id</th>
                                <th>User Id</th>
                                <th>Username</th>
                                <th>Medicine Id</th>
                                <th>Medicine Name</th>
                                <th>Quantity</th>
                                <th>Payment Status</th>
                                <th>Status</th>
                            </tr>
                            </thead>
            {message.map((e)=>{
                return (
                        <thead>
                            <tr>
                                    <td>{e.order_id}</td>
                                    <td>{e.user!=undefined?e.user.user_id:" "}</td>
                                    <td>{e.user!=undefined?e.user.username:" "}</td>
                                    <td>{e.medicine!=undefined?e.medicine.id:" "}</td>
                                    <td>{e.medicine!=undefined?e.medicine.name:" "}</td>
                                    <td>{e.quantity}</td>
                                    <td>{e.paymentStatus}</td>
                                    <td>{e.status}</td>
                            </tr> 
                            </thead>      
            )
            })}  </table>
            </div>
            )
    }
    export default Orders;