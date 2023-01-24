import { Bar } from "react-chartjs-2";
import {Chart as ChartJs, Tooltip, Legend, CategoryScale, BarElement } from 'chart.js';
ChartJs.register(Tooltip,Legend, CategoryScale,BarElement);



const options = {
    scales: {
        x: {
            ticks: {
                color: '#A3AED0'
            },
          grid: {
            display: false,
          },
        },
        y: {
            ticks: {
                display: false
            },
            grid: {
              display: false,
            },
            beginAtZero:true,
            max:100,
            display:false
          },
      },
   
    plugins: {
        legend: {
            display: false,
        },
        tooltip:{
            displayColors: false,
            yAlign:'bottom',
            backgroundColor: 'rgb(230,237,249)',
            bodyColor:'#775FFC',
            titleColor:'#775FFC'
        }
    },
   

};


const labels = [ 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const data = {
    labels,
    datasets: [
        {
            label: 'users',
            data: [70, 62, 80, 64,71,80,72],
            barThickness: 18,
            maxBarThickness: 20,
            backgroundColor: (context)=>{
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if(!chartArea){
                    return null;
                }
                return getGradient(chart);
            },
            borderRadius: '20'
        }
    ]
}

function getGradient(chart){
    const {ctx, chartArea : {top, bottom, left, right}, scales:{x,y}} = chart;
    const gredientSegment = ctx.createLinearGradient(0, bottom, 0, top);
    gredientSegment.addColorStop(0,'#775FFC');
    gredientSegment.addColorStop(0.3,'#775FFC');
    gredientSegment.addColorStop(0.3,'#84D9FD');
    gredientSegment.addColorStop(0.6,'#84D9FD');
    gredientSegment.addColorStop(0.6,'#E6EDF9');
    gredientSegment.addColorStop(1,'#E6EDF9');

    return gredientSegment;
}

function colorItems(tooltipItem){
    const bgColor =  tooltipItem.tooltip.labelColors[0];
    return bgColor;
}



const BarChart = (() => {
    return <Bar data={data} options={options}/>

})

export default BarChart;

