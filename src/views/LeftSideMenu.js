import addPostIcon from "../images/camera.png";
import man from "../images/man.png";
import feed from "../images/social-media.png";
import friends from "../images/friends.png";
import logout from "../images/logout.png";
import { Link, Outlet } from "react-router-dom";
import medlist from "../images/medlist.jpg";
import order from "../images/order.jpg";
import reqreord from "../images/reqreord.png";
import hospitallist from "../images/hospitallist.png"
import storelist from "../images/storelist.png"
import payment from "../images/payment.png"
function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/user/dashboard/viewMedicine" className="nav-link">
                <li class="list-group-item">
                    <img src={medlist} width="25px" height="25px"/> &nbsp; Medicine List
                </li>
            </Link>
            {/* <Link to="/user/dashboard/userProfile" className="nav-link">
                <li class="list-group-item"><img src={man} width="25px" height="25px"/> &nbsp; User Profile</li>
            </Link>   */}
            <Link to="/user/dashboard/placeOrder" className="nav-link">
                <li class="list-group-item"><img src={order} width="25px" height="25px"/> &nbsp; Order </li>
            </Link>
            <Link to="/user/dashboard/requestReorder" className="nav-link">
                <li class="list-group-item"><img src={reqreord} width="25px" height="25px"/> &nbsp; Reorder Request</li>
            </Link>
            <Link to="/user/dashboard/hospitals" className="nav-link">
                <li class="list-group-item"><img src={hospitallist} width="25px" height="25px"/> &nbsp; Hospital list</li>
            </Link>
            <Link to="/user/dashboard/medicalStores" className="nav-link">
                <li class="list-group-item"><img src={storelist} width="25px" height="25px"/> &nbsp; Medical Stores</li>
            </Link>
            <Link to="/user/dashboard/payment" className="nav-link">
                <li class="list-group-item"><img src={payment} width="25px" height="25px"/> &nbsp; Payment</li>
            </Link>
            <Link class="nav-link" to="/user/dashboard/logout">
                <li class="list-group-item"><img src={logout} width="25px" height="25px"/> &nbsp; Logout</li>
            </Link>
            </ul>
            <div>
            {/* /user/dashboard/createPost */}
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default LeftSideMenu;