import { Bar } from "react-chartjs-2";
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, BarElement, } from 'chart.js';
ChartJs.register(Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale,BarElement)


const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth:0
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Chart.js Vertical Bar Chart'
        },
    },

};


const labels = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const data = {
    labels,
    datasets: [
        {
            label: 'dataset1',
            data: [1, 2, 3, 4, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'dataset2',
            data: [1, 2, 3, 4, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        }
    ]
}



const BarChart = (() => {
    return <Bar data={data} options={options} />

})

export default BarChart;

