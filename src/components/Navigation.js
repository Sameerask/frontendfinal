import { Outlet } from "react-router-dom";
import HomeImg from "./HomeImg";
import NavigationBar from "./Navigationbar";

function Navigation(){
    return(
        <div>
            <NavigationBar />
            <Outlet />
            {/* <HomeImg />  */}
        </div>

    )
}

export default Navigation;