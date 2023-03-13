// function MedicalStores(){
//     return(<div>
//         <h4>User can see medical stores list</h4>
//     </div>)
// }

// export default MedicalStores;
// import { useEffect,useState } from "react";
// import axios from "axios";
// import { TableCell } from "@mui/material";
// import {border} from "@mui/material";
// import { ThemeContext } from "@emotion/react";
// function MedicalStore()
// {
//     const[message,setMessage] = useState([]);
//     const[area,setArea]=useState('');
//     const[show,setShow]=useState(true);
//     //const[emergencymessage,setEmergencyMessage]=useState('');
//     function getMedicalstore(){
//         axios.get(`http://localhost:9005/lists/medicalstore/${area}`).then((e)=>{
//             setMessage(e.data);
//             console.log(e.data);
            
//     })
//     }
//     function Emergency(){
//         setShow(false);

//     }

//     return(

//     <div>
//         <select  onChange={(e)=> setArea(e.target.value)}>
//             <option value="">Select Location</option>
//             <option value="Vizag">Vizag</option>
//             <option value="Gajuwaka">Gajuwaka</option>
//             <option value="Gachibowli">Gachibowli</option>
//             <option value="Srinagar">Srinagar</option>
//         </select>
//         <label>
//             <button onClick={getMedicalstore}>submit</button>
//             {/* <button onClick={Emergency}>Emergency Request</button>
//             <p hidden={show}>Request Sent</p> */}
//         </label>
//         <h3>MedicalStore List</h3>
//         <label>
//                              <button  onClick={Emergency} 
//                              style={{backgroundColor:"red"}}>Emergency Request</button>
//                                 <p hidden={show}>Request sent</p>
//                         </label>


//         <table className="table table-bordered table-stripped" style={{border: '2px solid black'}}>
//             <thead>
//             <tr scope="row">
//                 <th>id</th>
//                 <th>name</th>
//                 <th>area</th>
//                 </tr>
//                 </thead>
//                 {message.map((e)=>{
//                     return(
//                         <thead>
//                     <tr>
//                         <td>{e.id}</td>
//                         <td>{e.name}</td>
//                         <td>{e.area}</td>
//                         {/* <label>
//                              <button  onClick={Emergency} 
//                              style={{backgroundColor:"red"}}>Emergency Request</button>
//                                 <p hidden={show}>Need Medicine</p>
//                         </label> */}
//                         </tr>
//                         </thead>
//                         )
//                     })}
//                     </table>
//                     </div>
//                 )
//         }
//     export default MedicalStore;
import { useEffect,useState } from "react";
import axios from "axios";
import { TableCell } from "@mui/material";
import {border} from "@mui/material";
import { ThemeContext } from "@emotion/react";
function MedicalStore(){
    const[message,setMessage] = useState([]);
    const[area,setArea]=useState('');
    const[show,setShow]=useState(true);
    const[messageEmer,setMessageEmer]=useState('');
    const[emergencyReq,setEmergencyReq]=useState("Emergency request");
    //const[emergencymessage,setEmergencyMessage]=useState('');
    const user_id = sessionStorage.getItem("userid");
    function getMedicalstore(){
        axios.get(`http://localhost:9005/lists/medicalstore/${area}`).then((e)=>{
            setMessage(e.data);
            console.log(e.data);
        })
    }
    function Emergency()
    {
        //setShow(false);        
        var EmergencyRequest={

        } 
        let url=`http://localhost:9005/lists/medicalstore/${area}/${emergencyReq}/${user_id}`
        let headers={'Content-Type':'application/json' }
        axios.put(url,EmergencyRequest,{headers}).then((e)=>{
            console.log(e.data)
            setMessageEmer(e.data)
        }).catch((e)=>{
                console.log(e)
                //setShow(false);  //console.log("request sent");
            })
        }
                return(
                     <div>
                        <select onChange={(e)=> setArea(e.target.value)}>
                            <option value="">Select Location</option>
                            <option value="Vizag">Vizag</option>
                            <option value="Gajuwaka">Gajuwaka</option>
                            <option value="Gachibowli">Gachibowli</option>
                            <option value="Srinagar">Srinagar</option>
                            </select>
                            <label>
                                <button onClick={getMedicalstore}>submit</button>
                                {/* <button onClick={Emergency}>Emergency Request</button>
                                <p hidden={show}>Request Sent</p> */}
                                </label>
                                <h3>MedicalStore List</h3>
                                <label>
                                    <button onClick={Emergency}
                                    style={{backgroundColor:"red"}}>Emergency Request</button>
                                    {/* <p hidden={show}>Request sent</p> */}
                                    {messageEmer}
                                    </label>
                                    <table className="table table-bordered table-stripped" style={{border: '2px solid black'}}>
                                        <thead>
                                            <tr scope="row">
                                                <th>id</th>
                                                <th>name</th>
                                                <th>area</th>
                                                </tr>
                                                </thead>
                                                {message.map((e)=>{
                                                    return(
                                                    <thead>
                                                        <tr>
                                                            <td>{e.id}</td>
                                                            <td>{e.name}</td>
                                                            <td>{e.area}</td>
                                                            </tr>
                                                            </thead>
                                                            )
                                                         })}
                                                         </table>
                                                         </div>
                                                         )
            }
            export default MedicalStore;