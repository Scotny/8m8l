export async function Polar_Area(params) {
  new Chart(params, {
    type: "polarArea",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3], // Adjusted values
          backgroundColor: [
            " #FEAEAEB2", // Red
            " #D0E8FFB2", // Blue
            " #FBE38EB2", // Yellow
            " #A9F4D0B2", // Green
            " #9A89FFB2", // Purple
            " #FDD09FB2", // Orange
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 20, // Set max value to 20
          ticks: {
            font: {
              size: 24, // Increase font size
            },
          },
          grid: {
            color: "gray", // Darker grid lines
            lineWidth: 2, // Make grid lines thicker
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
          text: "Chart.js Polar Area Chart",
        },
      },
    },
  });
}
