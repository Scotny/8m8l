export function Bar(params) {
  let a = 1 / 3;
  let b = 2 / 3;
  new Chart(params, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          data: [423 + a, 400, 223 + a, 158 + a, 976 + b, 745, 23 + a],
          backgroundColor: " #FED0EEB2",
        },
        {
          label: "Dataset 2",
          data: [438 + a, 823 + a, 138 + a, 500, 245, 353 + a, 138 + a],
          backgroundColor: " #D0E8FFB2",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 1000, // Adjust if needed
        },
      },
    },
  });
}
