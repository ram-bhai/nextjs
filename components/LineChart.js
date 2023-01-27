import { Line } from 'react-chartjs-2';
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, } from 'chart.js';
import { useState } from 'react';
ChartJs.register(Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale,PointElement)


export default function LineChart(){

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
          beginAtZero: true,
          max:100,
          ticks: {
            display: false
        },
            grid: {
              display: false,
            },
            display:false
          },
          
      },
    responsive: true,
    plugins: {
        legend: {
          display:false
        },
        tooltip:{
          displayColors: false,
          yAlign:'bottom',
          backgroundColor: 'rgb(67,24,255)',
          bodyColor:'#fff',
          titleColor:'#fff',
          bodyAlign:'center',
         
      }
    },
    elements: {
      point:{
          radius: 0
      }
  }
   

};
    const [data, setData]= useState({
        labels:[ "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets:[{
          label:"Clients",
          data:[30,40,70,57,60,65,53,65],
          borderColor:'blue',
          tension:'0.4'
        },
        {
          label:"Services",
          data:[10,20,50,37,40,45,40,45],
          borderColor:'#6AD2FF',
          tension:'0.4'
        }
      ]
    
      })
      return (
        <>
        <Line data={data} options={options}></Line>
        </>
      )
}