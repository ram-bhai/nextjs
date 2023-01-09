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
          },
      },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
};


const labels = [ 15, 16, 17, 18, 19];
const data = {
    labels,
    datasets: [
        {
            label: 'users',
            data: [10, 22, 13, 44,35,20,22],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#A2B337',
            borderRadius: '20'
        },
    ]
}



const GradientChart = (() => {
    return <Bar id="chart" data={data} options={options}/>

})

export default GradientChart;

