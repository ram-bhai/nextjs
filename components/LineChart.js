import { Line } from 'react-chartjs-2';
import {Chart as ChartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, } from 'chart.js';
import { useState } from 'react';
ChartJs.register(Title,Tooltip,LineElement,Legend, CategoryScale, LinearScale,PointElement)


export default function LineChart(){
    const [data, setData]= useState({
        labels:["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets:[{
          label:"First Dataset",
          data:[40,30,50,40,35,58,40,37,29,90,63,54],
          backgroundColor:'blue',
          borderColor:'blue',
          tension:'0.4'
        }]
    
      })
      return (
        <>
        <Line data={data}></Line>
        </>
      )
}