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
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderRadius: '20'
        },
        {
            label: 'servers',
            data: [11, 20, 3, 14, 25,10,4],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#2B3674'
        }
    ]
}



const BarChart = (() => {
    return <Bar data={data} options={options}/>

})

export default BarChart;

