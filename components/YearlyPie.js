import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
              }
        },
        tooltip:{
          displayColors: false,
          yAlign:'bottom',
          backgroundColor: 'rgb(230,237,249)',
          bodyColor:'#775FFC',
          titleColor:'rgba(67,  24, 255)'
      }
    },
    responsive: true
  };


const data = {
    labels: ['Your files', 'Systems'],
    datasets: [
      {
        
        data: [40, 40, 20],
        backgroundColor: [
          'rgba(67,  24, 255)',
          'rgba(106, 210, 255)',
          'rgba(239, 244, 251)'
        ],
        borderColor: [
            'rgba(67,  24, 255)',
            'rgba(106, 210, 255)',
            'rgba(239, 244, 251)'
        ],
        borderWidth: 0,
      },
    ],
  };

const YearlyPie = () => {
  return (<Pie data={data} options={options}></Pie>
    
  )
}

export default YearlyPie;