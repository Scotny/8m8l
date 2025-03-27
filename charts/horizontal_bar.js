export function Horizontal(params) {
  new Chart(params, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [-758, -576, 312, 902, -384, -576, 478],
          backgroundColor: " #FBE38EB2", // Light Yellow
        },
        {
          label: "Dataset 2",
          data: [758, -894, 354, 228, 400, 278, 60],
          backgroundColor: " #DBAEFFB2", // Light Purple
        },
      ],
    },
    options: {
      indexAxis: "y", // Make it horizontal
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "right",
        },
        title: {
          display: true,
          text: "Chart.js Horizontal Bar Chart",
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          suggestedMin: -1000,
          suggestedMax: 1000,
        },
      },
    },
  });
}
