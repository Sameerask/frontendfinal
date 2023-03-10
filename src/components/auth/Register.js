// import { Label } from "@mui/icons-material";
// import { Button, Input, Paper } from "@mui/material";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import NavigationBar from "../Navigationbar";

// function Register(){

//     const [ userName, setUserName ] = useState();
//     const [ password, setPassword ] = useState();
//     //const [ email, setEmail ] = useState();
//     const [ message, setMessage ] = useState();
//     const [ userNameValidation, setUserNameValidation ] = useState();
//     const [ passwordValidation, setPasswordValidation ] = useState();
//     //const [ emailValidation, setEmailValidation ] = useState();

//     function handleUserName(eve){
//         setUserName(eve.target.value);
//     }
    
//     function handlePassword(eve){
//         setPassword(eve.target.value);
//     }
    
//     // function handleEmail(eve){
//     //   setEmail(eve.target.value);
//     // }

//     function handleButton(){
        
//         if(userName == undefined){
//             setUserNameValidation("Please Enter Username");
//         }else if(userName.length < 3){
//             setUserNameValidation("User name should be greater than 3");
//          }

//         // if(email == undefined){
//         //     setEmailValidation("Please Enter Email");
//         // }

//         if(password == undefined){
//             setPasswordValidation("Please Enter Password");
//         }else if(password.length < 3){
//             setPasswordValidation("Password should be greater than 3");
//         }
//     }



//     return(
//         <div>
//             <NavigationBar />
//         <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
//             <div style={{marginLeft : "160px"}}>
//             <h3 style={{marginLeft : "35px"}} >Sign Up</h3> <br/>
//         User Name   <br/>
//         <Input type="text" required onChange={handleUserName}/> <br/>
//         <p style={{color:'red'}}>{userNameValidation}</p>
//         Password  <br/>
//         <Input type="password" required onChange={handlePassword}/> <br/> <br/>
//         <p style={{color:'red'}}>{passwordValidation}</p>

//         {/* Email Id   <br/>
//         <Input type="email" required onChange={handleEmail}/> <br/>
//         <p style={{color:'red'}}>{emailValidation}</p> */}

//         <Button style={{marginLeft:"50px"}} variant="contained" onClick={handleButton} >Register</Button> <br/><br/>
//         <Link to="/login" style={{textDecoration:"none"}}> <p>Already Have Account ?</p></Link>
//         <p style={{marginLeft:"50px"}}>{message}</p><br/><br/>
//         </div>
//         </Paper>
//     </div>
//     )
// }

// export default Register;
import { Label } from "@mui/icons-material";
import { Button, Input, Paper } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios"

function Register(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState() 
    //const { username, setUsername, password, setPassword, showPage, setShowPage } = useContext(ProfileContext)
    // const {username, setUsername, password, setPassword, showPage, setShowPage}=useContext(ProfileContext)  
    const [uservalidation,setUservalidation]=useState()
    const [passwordvalidation,setPasswordvalidation]=useState()
    const [navigationmessage,setNavigationmessage]=useState()
    return( <div  >
        {/* <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
        <h3 style={{marginLeft : "35px"}} >Sign up</h3> <br/> */}
        <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
           <div style={{marginLeft : "150px"}}>
          <h3 style={{marginLeft : "35px"}} >Sign up</h3> <br/>
            Enter User Name <br/>
            <Input type="text" onChange={(e)=>{
                setUsername(e.target.value)
            }}/><br/>
            <p style={{color:"red"}}> {uservalidation}</p>
            Enter Password <br/>
            <Input type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/><br/>
            <p style={{color:"red"}}> {passwordvalidation}</p>
            {/* <p style={{color:"green"}}> {navigationmessage}</p> */}
            <Button style={{marginLeft:"50px"}} variant="contained"
            onClick={()=>{
                if(username===undefined)
                {
                    setUservalidation("user name is blank")
                }
                else if(username.length<3)
                {
                    setUservalidation("user name less then 3")
                }
                else
                {
                    setUservalidation(" ")
                }
                if(password===undefined)
                {
                    setPasswordvalidation("password name is blank")
                }
                else if(password.length<3)
                {
                    setPasswordvalidation("password name less then 3")
                }
                else
                {
                    setPasswordvalidation(" ")
                }
                // if(username!==undefined && password!==undefined && username==="user" && password==="pass123")
                // {
                //     setNavigationmessage("Registration Successful")
                //     //setShowPage(true)
                // }
                // else{
                //     setNavigationmessage("invalid username and password")
                // }
                var user={
                    username:username,
                    password:password
                }
                let url="http://localhost:9005/users/registerUser"
                let headers={
                    'Content-Type':'application/json'
                }
                axios.post(url,user,{headers}).then((e)=>{
                    
                        setNavigationmessage(e.data)
                        //setShowPage(true)                    
                        console.log(e.data)
                    
                }).catch((e)=>{
                    console.log(e.response.data)
                })

            }}
            >Register</Button>
            {navigationmessage}
            </div>
            </Paper>
            </div>
            )}
        export default Register