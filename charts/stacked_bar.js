export function Stacked_Bar(params) {
  new Chart(params, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [-230, -745, 110, 715, -365, 60, -120],
          backgroundColor: " #FEAEAEB2", // Red
          stack: "Stack 0",
        },
        {
          label: "Dataset 2",
          data: [-410, -605, -805, 395, -510, -655, 500],
          backgroundColor: " #A9F4D0B2", // Green
          stack: "Stack 0",
        },
        {
          label: "Dataset 3",
          data: [-130, -130, 460, -670, 630, 60, 365],
          backgroundColor: " #AEC9FEB2", // Blue
          stack: "Stack 1",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked",
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          suggestedMin: -1500,
          suggestedMax: 1500,
        },
      },
    },
  });
}
