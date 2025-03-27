export function Pie(params) {
  new Chart(params, {
    type: "pie",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [8, 10, 6, 5, 1, 3], // Adjust values as needed
          backgroundColor: [
            " #FED0EEB2", // Red
            " #D0E8FFB2", // Blue
            " #FBE38EB2", // Yellow
            " #A9F4D0B2", // Green
            " #DBAEFFB2", // Purple
            " #FDD09FB2", // Orange
          ],
          borderWidth: 0,
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
          text: "Chart.js Pie Chart",
          font: {
            size: 18,
          },
        },
      },
    },
  });
}
