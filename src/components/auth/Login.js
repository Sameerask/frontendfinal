import {Button,Input,Paper} from  "@mui/material"
import {useContext, useState} from 'react'
//import { ProfileContext } from "../Auth/context"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Login()
{
   const[username,setUserName]=useState()
    const[password,setPassword]=useState()

    const[uservalidation,setUserValidation]=useState()
    const[passwordvalidation,setPasswordvalidation]=useState()
    const[navigationMessage,setNavigationMessage]=useState()
    const [ userid, setUserid ] = useState();
    const [ userInfo, setUserInfo ] = useState({});
    var navigate = useNavigate();
    return (<div >
   
        <Paper elevation={4} style={{marginTop : "80px", width: "500px", marginLeft:"400px"}}>
           <div style={{marginLeft : "150px"}}>
          <h3 style={{marginLeft : "35px"}} >Login</h3> <br/>

        Enter user Name <br/>
        <Input type="text" inputProps={{"data-testid":"usernameTest"}}
        onChange={(e)=>{
            setUserName(e.target.value)
        }
        }/><br/>
        <p style={{color:"red"}}>{uservalidation}</p>
        Enter Password <br/>
        <Input type="password" inputProps={{"data-testid":"passwordTest"}}
        onChange={(e)=>{
            setPassword(e.target.value)
        }} /><br/>
        <p style={{color:"red"}}>{passwordvalidation}</p>
        <Button style={{marginLeft:"50px"}} variant="contained" data-testid="login" 
         onClick={()=>{
            if(username==undefined)
            {
                setUserValidation("user name is blank")
            }
            else if(username.length<3)
            {
                setUserValidation("user name is less than 3")
            }
            else{
                setUserValidation("")
            }
            if(password==undefined)
            {
                setPasswordvalidation("Password  is blank")
            }
            else if(username.length<3)
            {
                setPasswordvalidation("password is less than 3")
            }
            else{
                setPasswordvalidation("")
            }
            var user={ 
                            username:username,
                            password:password
                        }
                        let headers={
                            'Content-Type':'application/json'
                        }
                        axios.post("http://localhost:9005/users/user/login",user,{headers}).then((e)=>{
                            if(e.status == 200)
                            {
                                sessionStorage.setItem("loggedIn", true);
                                    let loggedInUser = {
                                        username : username
                                    }
                                
                                sessionStorage.setItem("user", JSON.stringify(loggedInUser));
                                navigate("/user/dashboard");
                                setNavigationMessage(e.data)
                                console.log(e.data)
                            }
                        }).catch((e)=>{
                            setNavigationMessage(e.response.data)
                            console.log(e.response.data)
                         })
         }}
        >Login</Button>
        
        <Link to="/register" style={{textDecoration:"none"}}> <p>Don't Have Account ?</p> </Link>
        {navigationMessage}
        </div>
        </Paper>

    </div>)

}
export default Login
