export function Line(params) {
  let a = 3 / 10;
  new Chart(params, {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [-266 / a, 281 / a, 400, 25 / a, -100, -340, 131 / a], // Adjust values as needed
          borderColor: "rgba(255, 206, 86, 1)", // Yellow
          backgroundColor: " #FBE38EB2",
          borderWidth: 2,
          pointRadius: 6,
          pointBackgroundColor: "rgba(255, 206, 86, 1)",
        },
        {
          label: "Dataset 2",
          data: [-268 / a, -139 / a, -205 / a, -155 / a, -200, -161 / a, 0], // Adjust values as needed
          borderColor: "rgba(153, 102, 255, 1)", // Purple
          backgroundColor: " #9A89FFB2",
          borderWidth: 2,
          pointRadius: 6,
          pointBackgroundColor: "rgba(153, 102, 255, 1)",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            font: {
              size: 16, // Increase font size
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.2)", // Darker grid lines
          },
        },
        x: {
          ticks: {
            font: {
              size: 16, // Increase font size
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.2)", // Darker grid lines
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
          font: {
            size: 18,
          },
        },
      },
    },
  });
}
