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
            lineWidth: 0,
            drawBorder: false,
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
            backgroundColor: 'rgb(79,39,255)',
            bodyColor:'#fff',
            titleColor:'#fff'
        }

    },
    responsive: true,
    

};


const labels = [ 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const data = {
    labels,
    datasets: [
        {
            label: 'users',
            data: [70, 82, 93, 74,25,10,22,60,40,53],
            backgroundColor: (context)=>{
                const chart = context.chart;
                const {ctx, chartArea} = chart;
                if(!chartArea){
                    return null;
                }
                return getGradient(chart);
            },
            borderRadius: '20',
            barThickness: 10,
            maxBarThickness: 20,
        }
    ]
}

function getGradient(chart){
    const {ctx, chartArea : {top, bottom, left, right}, scales:{x,y}} = chart;
    const gredientSegment = ctx.createLinearGradient(0, bottom, 0, top);
    gredientSegment.addColorStop(0,'#C8BCFF');
    gredientSegment.addColorStop(1,'#4318FF');

    return gredientSegment;
}



const GradientChart = (() => {
    return <Bar  data={data} options={options}/>

})

export default GradientChart;

