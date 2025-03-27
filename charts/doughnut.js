export function Doughnut(params) {
  new Chart(params, {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: [20, 35, 15, 15, 7, 10], // Adjust these values as per your image
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
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    },
  });
}
