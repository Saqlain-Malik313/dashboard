import React, {  } from "react";
import { Chart as Chartjs, ArcElement,Tooltip,Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(
    ArcElement,
    Tooltip,
    Legend
)

const Piechart=()=>{
    const data={
        labels:[],
        datasets:[{
            label:'poll',
            data:[35,65],
            backgroundColor:['Crimson','DarkOrchid'],
            borderColor:['Crimson','DarkOrchid'],
        }]
    }

    const options={

    }
    const textCenter={
        id:'textcenter',
        beforeDatasetsDraw(chart,args,pluginOptions){
            const { ctx,}=chart;

            ctx.save();
            ctx.font='bolder 25px sans-serif';
            ctx.fillStyle='black';
            ctx.textAlign='center';
            ctx.textBaseline='middle';
            var text="65%"
            ctx.fillText(`${text}`,chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y)
        }
    }




   return<div className="row" style={{width:'90%' ,height:'90%'}}>
    <Doughnut 
    data={data}
    options={options}
    plugins={[textCenter]}
    ></Doughnut>
        
    </div>

}



export default Piechart;