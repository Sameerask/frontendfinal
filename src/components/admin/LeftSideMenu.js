import man from "../../images/man.png";
import logout from "../../images/logout.png";
import { Link, Outlet } from "react-router-dom";
import addmed from "../../images/addmed.jpg";
import ar from "../../images/ar.jpg";
import reorder from "../../images/reorder.png";
import lowstock from "../../images/lowstock.png";
import ordplace from "../../images/ordplace.png";
import reorderlist from "../../images/reorderlist.jpg";
import update from "../../images/update.jpg"
import medlist from "../../images/medlist.jpg"
function LeftSideMenu(){
    return (
        <div className="col-md-2">
            <ul class="list-group list-group-flush">
            <Link to="/admin/dashboard/addMedicine" className="nav-link">
                <li class="list-group-item">
                    <img src={addmed} width="25px" height="25px"/> &nbsp; Add Medicine
                </li>
            </Link>
            <Link to="/admin/dashboard/updatestock" className="nav-link">
                <li class="list-group-item">
                    <img src={update} width="25px" height="25px"/> &nbsp; Update Stock
                </li>
            </Link>
            <Link to="/admin/dashboard/allmedicine list" className="nav-link">
                <li class="list-group-item">
                    <img src={medlist} width="25px" height="25px"/> &nbsp;Medicine List
                </li>
            </Link>
            <Link to="/admin/dashboard/lowStock" className="nav-link">
                <li class="list-group-item"><img src={lowstock} width="25px" height="25px"/> &nbsp; Low Stock </li>
            </Link>
            {/* <Link to="/admin/dashboard/adminProfile" className="nav-link">
                <li class="list-group-item"><img src={man} width="25px" height="25px"/> &nbsp; Admin Profile</li>
            </Link>  */}
            {/* <Link to="/admin/dashboard/ordersPlaced" className="nav-link">
                <li class="list-group-item"><img src={ordplace} width="25px" height="25px"/> &nbsp; Orders Placed</li>
            </Link>  */}
            <Link to="/admin/dashboard/acceptRejectOrders" className="nav-link">
                <li class="list-group-item"><img src={ar} width="25px" height="25px"/> &nbsp; Orders Request</li>
            </Link>
            <Link to="/admin/dashboard/ordersPlaced" className="nav-link">
                <li class="list-group-item"><img src={ordplace} width="25px" height="25px"/> &nbsp; Orders Placed</li>
            </Link>
            { <Link to="/admin/dashboard/reorderMedicine" className="nav-link">
                <li class="list-group-item"><img src={reorder} width="25px" height="25px"/> &nbsp; Reorder </li>
            </Link> }
            <Link to="/admin/dashboard/reorderlist" className="nav-link">
                <li class="list-group-item"><img src={reorderlist} width="25px" height="25px"/> &nbsp; Reorder request list</li>
            </Link>
            <Link class="nav-link" to="/admin/dashboard/logout">
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