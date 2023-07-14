import React from 'react'
import "../cssFile/MenuBar.css";
import graph from "../Assets/graph.png";
import graph2 from "../Assets/RedGraph.png"
import First from './First';
import Second from './Second';
import Third from './Third';
import 'animate.css';



function MenuBar() {
  return (
    <div className='container'>
        <nav>
            <h1 class="animate__animated animate__jello animate__jello-2">Hello, Pratik Munjamkar</h1>
            <p>Following is Your Organization's Performance Summary</p>
            
        </nav>
        
        
        <div id='first'>
          
            <First
            heading="In Training Workers"
            value="3,354"
            span1="&#8605; 20%"
            span2="234"
            img={graph}
            className="span1"
            />
            <First
          heading="Video Watch-Time (Hrs)"
          value="2,433"
          span1="&#8605; 20%"
          span2="435"
          img={graph2}
          classname="span3"
        />
        <First
          heading="% Workers Passing Quiz"
          value="95%"
          span1="&#8605; 20%"
          span2="24%"
          img={graph}
          classname="span1"
        />
        <First
          heading="Avg. Days Taken"
          value="6"
          span1="&#8605; 20%"
          span2="3"
          img={graph}
          classname="span1"
        />
        </div>
        <div id="second">
            <Second/>
        </div>
        <div id="third">
            <Third/>
        </div>
        
    </div>
  )
}

export default MenuBar