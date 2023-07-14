import React from "react";
import "../cssFile/Second.css"
import ChapterWiseStatus from "../Assets/second.png";
import WorkersInTraining from "../Assets/second_Img2.png";

function Second() {
  return (
    <>
    
      <div className="second_box1">
        <p className="head">Chapter Wise Status</p>
        <img src={ChapterWiseStatus} alt="Chapter Wise Status"/>
      </div>
      <div className="second_box2">
        <p>
            <span>Last 14 Days Active Workers In Training</span>
            <span>Last 14 Days</span>
        </p>
        <img src={WorkersInTraining} alt="Workers In Training"/>
      </div>
    </>
  );
}

export default Second;
