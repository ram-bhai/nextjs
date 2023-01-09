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
    },
  };


const data = {
    labels: ['Your files', 'Systems'],
    datasets: [
      {
        
        data: [65, 25, 10],
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

const PieChart = () => {
  return (<Pie data={data} options={options}></Pie>
    
  )
}

export default PieChart
