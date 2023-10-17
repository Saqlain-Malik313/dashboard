import React, { useState } from "react";
import Chart from "react-apexcharts";

const Bars=()=>{

    const[state,setstate]=useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['jan', 'feb', 'Mar', 'Apr', 'May', 'june', 'july','Aug','Sep','Oct','Nov','Dec']
          }
        },
        series: [
          {
            name: "series-1",
            data: [3,2,8,6,7,2,6,8,7,5,4,5.1]
          }
        ]
      }
    )

    return<div className="row">
        <div className="col-4"> <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="620"
              height='190'
            /></div>

    </div>

}



export default Bars;