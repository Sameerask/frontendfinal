import { Outlet,useNavigate } from "react-router-dom";
import AfterNavbar from "./AfterNavBar";
import LeftSideMenu from "./LeftSideMenu";
import axios from "axios";
import { useState, useEffect } from "react"
import WelcomeMessage from "../welcomemessage";
import background from "../../images/background.png"

function AdminDashboard(){
    
    const [ username, setUsername ] = useState();
    const [ userid, setUserid ] = useState();
    var navigate = useNavigate();


    useEffect(()=>{
        const isLoggedIn = sessionStorage.getItem("loggedIn");
        const username = sessionStorage.getItem("user");
        const parsedUsername = username==null ? "" : JSON.parse(username).username;
        if(username == null){
            navigate("/adminlogin");
        }
        
        if(isLoggedIn){
            axios.get(`http://localhost:9005/admin/getAdminByUsername/${parsedUsername}`)
                .then((res)=>{
                    setUserid(res.data);
                    console.log(res.data);
                    sessionStorage.setItem("userid", res.data);
                })
                .catch((err)=>{
                    console.log(err);
                })
                
        }else{
            // alert("Login first");
            navigate("/adminlogin");
        }
    }, []);
    return(
    <div>
        <div
          className="container-fluid"
          style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", width:"1400px"  }}
        >
          
            <WelcomeMessage />
        <div className="container">
            <AfterNavbar />
        </div>
        
        <div className="row" style={{marginTop:"60px"}}>
            <LeftSideMenu />
            <div className="col-md-10">
                <Outlet />
            </div>
        </div>
        </div>
    </div>
    )
}

export default AdminDashboard;