export const locationChart = {
  type: 'bar',
  data: {
    labels: ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kavre', 'Pokhara', 'Rasuwa'],
    datasets: [

    {
      label: "Total",
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      data: [3+4, 5+7, 6+3, 12+6, 3+10, 5+7]
    },
    
    {
      label: "Female",
      backgroundColor: 'rgba(255, 113, 91, 0.2)',
      borderColor: 'rgba(255, 113, 91, 1)',
      borderWidth: 1,
      data: [3, 5, 6, 12, 3, 5]
    },

    {
      label: "Male",
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [4, 7, 3, 6, 10, 7]
    }
  ]
  },
  options: {
    aspectRatio: 1.5,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },

    title: {
      display: true,
      text: "Location Chart",
      fontSize: 18,
      fontFamily: "'Palanquin', sans-serif"
    },

    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
        fontFamily: "'Maven Pro', sans-serif"
      }
    }
  }
};

export default locationChart;
