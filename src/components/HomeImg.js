// import medimage from "../images/medimage.png";

// function HomeImg(){
//     return(
//         <div>
//             <center>
//             <img src={medimage} className="img-fluid" />
//             </center>
//         </div>
//     )
// }

// export default HomeImg;
import { height } from "@mui/system";
import medimage from "../images/medimage.png";
import PHARMA from "../images/medimage.png";
import images from "../images/medimage.png";
import './HomeImg.css';

function HomeImg(){
    return(


      
<div id="demo" class="carousel slide" data-bs-ride="carousel" >

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {medimage} style={{height:"500px"}} alt="Los Angeles" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      {/* <img src="chicago.jpg" alt="Chicago" class="d-block w-100"> */}
    </div>
    <div class="carousel-item">
      {/* <img src="ny.jpg" alt="New York" class="d-block w-100"> */}
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
       );
{/* <div >
<div className="home-img" style={{ backgroundColor: "skyblue" }}>
           <p>" "</p> 
           <p>" "</p> 
           <p>" "</p> 
            <center>
            <img src={medimage} className="img-fluid home-image" style={{ backgroundColor: "blue" }} />
            </center>
        </div>
        </div> */}
        

           
            
            
       
    
}

export default HomeImg;