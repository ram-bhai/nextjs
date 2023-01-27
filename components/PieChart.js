import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

// const options = {
//     plugins: {
//         legend: {
//             position: 'bottom',
//             labels: {
//                 usePointStyle: true,
//               }
//         },
//         tooltip:{
//           displayColors: false,
//           yAlign:'bottom',
//           backgroundColor: 'rgb(230,237,249)',
//           bodyColor:'#775FFC',
//           titleColor:'rgba(67,  24, 255)'
//       }
//     },
//     responsive: true
//   };


// const data = {
//     labels: ['Your files', 'Systems'],
//     datasets: [
//       {
        
//         data: [63, 25, 12],
//         backgroundColor: [
//           'rgba(67,  24, 255)',
//           'rgba(106, 210, 255)',
//           'rgba(239, 244, 251)'
//         ],
//         borderColor: [
//             'rgba(67,  24, 255)',
//             'rgba(106, 210, 255)',
//             'rgba(239, 244, 251)'
//         ],
//         borderWidth: 0,
//       },
//     ],
//   };




var options = {
  type: 'doughnut',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets[0].data.map((data, i) => ({
              text: `${chart.data.labels[i]} ${data}`,
              fillStyle: datasets[0].backgroundColor[i],
            }))
          }
        }
      }
    }
  }
}
const PieChart = () => {
  return (<Pie data = {options.data} options={options}></Pie>
    
  )
}

export default PieChart
