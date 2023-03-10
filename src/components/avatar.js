import {Avatar} from "@mui/material"
function UserAvatar(){
    const k=sessionStorage.getItem("user")
    return(<div>
        <p>" "</p>
        <p>" "</p>
        <p className="text-black"
      style={{ textAlign: "center",fontWeight: "bold" }} >
      Welcome to the User Dashboard!
      </p>
        <Avatar variant="oval" sx={{width:"90px",backgroundColor:"skyblue",margin:"10px"}}>
            {k && k.length>1 ? k[13] + k[14] + k[15] : ""}
        </Avatar>
    </div>)
}
export default UserAvatar