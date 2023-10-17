import React from "react";
import Bars from "./chart/bargraph";
import PieChart from "./chart/pie";

const Chartbar=()=>{
    return<div class="container" style={{marginTop:'10px'}}>
    
    <div class="card-columns row">
      
      <div class="card bg-light col-sm-" style={{width:'650px', height:'280px'}}>
        <div className="row"style={{marginTop:'10px', marginLeft:'10px'}} >
            <div className="col-9">
                <h3>Overview</h3>
                <small>Monthly Earning</small>
            </div>
            <div className="col-1">
                <select>
                    <option>Quality</option>
                </select>
            </div>

        </div>
        <div class="card-body text-center">
          <p class="card-text"><Bars/></p>
        </div>
      </div>
      <div class="card bg-light" style={{width:'280px', height:'280px',marginLeft:'10px'}}>
        <h3>Customers</h3>
        <small>Customers that buy product</small>
      <div class="card-body text-center">
        <p class="card-text" style={{marginLeft:'50px'}}><PieChart/></p>
      </div>
    </div>
      
    </div>
  </div>
  

}

export default Chartbar;