import React, { useState, useEffect } from "react";
import axios from "axios";
function HomeComponent() {
  return (
    <div className="dataHarry"> 
    </div>
  );
}

const dataHarry = () => {
  axios.get("https://hp-api.onrender.com/api/characters").then((res) => {
    console.log("******Harry poter data************", res);
  });
};

export default HomeComponent;
