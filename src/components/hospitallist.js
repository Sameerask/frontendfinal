// function HospitalsList(){
//     return(<div>
//         <h4>User can see hospitals list</h4>
//     </div>)
// }
// export default HospitalsList;
// import { useEffect,useState } from "react";
// import axios from "axios";
// import { TableCell } from "@mui/material";
// import {border} from "@mui/material";
// import { ThemeContext } from "@emotion/react";
// function Hospital()
// {
//     const[message,setMessage] = useState([]);
//     const[location,setLocation]=useState('');
//     const[show,setShow]=useState(true);
//     const[check,setCheck]=useState(true)
//     //const[emergencymessage,setEmergencyMessage]=useState('');
//     function getHospital(){
//         axios.get(`http://localhost:9005/list/hospitals/${location}`).then((e)=>{
//             setMessage(e.data);
//             console.log(e.data);
//             setCheck(false);
//     })
//     }
//     function Emergency(){
//         setShow(false);
//       //console.log("request sent");
//     }

//     return(

//     <div>
//         <select  onChange={(e)=> setLocation(e.target.value)}>
//             <option value="">Select Location</option>
//             <option value="Hyderabad">Hyderabad</option>
//             <option value="Banglore">Bangalore</option>
//             <option value="Chennai">Chennai</option>
//         </select>
//         <label>
//             <button onClick={getHospital}>submit</button>
//             {/* <button onClick={Emergency}>Emergency Request</button>
//             <p hidden={show}>Request Sent</p> */}
//         </label>
//         <h3>Hospital List</h3>
//         <label>
//                  <button  onClick={Emergency} 
//                      style={{backgroundColor:"red"}}>Emergency Request</button>
//                     <p hidden={show}>Request Sent</p>
//             </label>
//         <table className="table table-bordered table-stripped" style={{border: '2px solid black'}}>
//             <tr scope="row">
//                 <th>id</th>
//                 <th>name</th>
//                 <th>location</th>
//                 </tr>
//                 {message.map((e)=>{
//                     return(
//                     <tr>
//                         <td>{e.id}</td>
//                         <td>{e.name}</td>
//                         <td>{e.location}</td>
//                         {/* <label>
//                              <button  onClick={Emergency} 
//                              style={{backgroundColor:"red"}}>Emergency Request</button>
//                                 <p hidden={show}>Request Sent</p>
//                         </label> */}
//                         </tr>
//                         )
//                     })}
//                     </table>
//                     </div>
//                 )
//         }
//     export default Hospital;
import { useEffect,useState } from "react";
import axios from "axios";
import { TableCell } from "@mui/material";
import {border} from "@mui/material";
import { ThemeContext } from "@emotion/react";
function Hospital(){ const[message,setMessage] = useState([]);
    const[location,setLocation]=useState('');
    const[show,setShow]=useState(true);
    const[check,setCheck]=useState(true)
    const[messageEm,setMessageEm] = useState('');
    const[emergencyReq,setEmergencyReq]=useState("Need Medicine");
    function getHospital(){
         axios.get(`http://localhost:9005/list/hospitals/${location}`).then((e)=>{
             setMessage(e.data);
              console.log(e.data);
            })
        }
        function Emergency()
        {
            var EmergencyRequest={

            }
            let url=`http://localhost:9005/list/hosiptals/${location}/${emergencyReq}`
            let headers={'Content-Type':'application/json' }
            axios.put(url,EmergencyRequest,{headers}).then((e)=>{
                console.log(e.data)
                setMessageEm(e.data)
            }).catch((e)=>{
                console.log(e)
                 //setShow(false);      //console.log("request sent");    
                })
            }
            return(
            <div>
                <select onChange={(e)=> setLocation(e.target.value)}>
                    <option value="">Select Location</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Banglore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    </select>
                    <label>
                        <button onClick={getHospital}>submit</button>
                        {/* <button onClick={Emergency}>Emergency Request</button>            <p hidden={show}>Request Sent</p> */}
                        </label>
                        <h3>Hospital List</h3>
                        <label>
                            <button onClick={Emergency}
                            style={{backgroundColor:"red"}}>Emergency Request</button>
                             {messageEm}
                             </label>
                             <table className="table table-bordered table-stripped" style={{border: '2px solid black'}}>
                                <tr scope="row">
                                    <th>id</th>
                                    <th>name</th>
                                    <th>location</th>
                                    </tr>
                                     {message.map((e)=>{
                                        return(
                                        <tr>
                                            <td>{e.id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.location}</td>
                                            </tr>
                                            )
                                        })
                                        }
                                        </table>
                                         </div>
                                         )
                                         }
                                    export default Hospital