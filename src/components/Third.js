import React from "react";
import "../cssFile/Third.css";
import Quiz from "../Assets/third_Img1.png";
import DailyTraining from "../Assets/third_Img2.png"

function Third() {
  return (
    <>
      <div className="third_box1">
        <p className="head1">Monthly training Activity</p>
        <p className="head2">
          <span style={{ color: "green", fontSize: "20px" }}>&#8593</span>16%
          more enrollers this year
        </p>
        <ul>
          <li>
            <p className="course">Course a</p>
            <p className="count">23 Workers Took this course This Week</p>
          </li>
          <li>
            <p className="course">Course b</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course c</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
          <li>
            <p className="course">Course d</p>
            <p className="count">253 Workers Took this course This week</p>
          </li>
        </ul>
      </div>
      <div className="third_box2">
        <p>Quiz Passing %</p>
        <img src={Quiz} alt="Quiz Passing"/>
      </div>
      <div className="third_box3">
        <p>
          <span>Daily Training Completions</span>
          <span>Last 7 Days</span>
        </p>
        <img src={DailyTraining} alt="Daily Training"/>
      </div>
    </>
  );
}

export default Third;
