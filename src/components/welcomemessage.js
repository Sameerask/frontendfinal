import React from "react";

function WelcomeMessage() {
  return (
<div  >
    <div className="container-fluid mt-3 mb-3">

      <p className="text-black"
      style={{ textAlign: "center" }}>Welcome to the Admin Dashboard!</p>
      <p className="text-black"
      style={{ textAlign: "center",fontWeight: "bold" }} >
      Welcome to the Admin Dashboard!
      </p>
      <p className="text-black"
      style={{ textAlign: "center" }}>
        This is where you can manage your medicines, orders, and more.
      </p>
    </div>
    </div>
  );
}

export default WelcomeMessage;
