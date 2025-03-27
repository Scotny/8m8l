export function Line_Multi(params) {
    new Chart(params, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Dataset 1",
            data: [-635, -462.5, 200, 62.5, 555, -267.5, -492.5],
            borderColor: "rgba(255, 223, 128, 0.7)", // Light Yellow
            backgroundColor: "rgba(255, 223, 128, 0.3)",
            pointRadius: 6,
            pointBackgroundColor: "rgba(255, 223, 128, 1)",
            yAxisID: "y",
          },
          {
            label: "Dataset 2",
            data: [-800, 0, 527.5, 400, -662.5, -452.5, -495],
            borderColor: "rgba(160, 140, 255, 0.7)", // Light Purple
            backgroundColor: "rgba(160, 140, 255, 0.3)",
            pointRadius: 6,
            pointBackgroundColor: "rgba(160, 140, 255, 1)",
            yAxisID: "y",
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
            text: "Chart.js Line Chart - Multi Axis",
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: -800,
            suggestedMax: 600,
            position: "left",
          },
          y1: {
            beginAtZero: false,
            suggestedMin: -1000,
            suggestedMax: 800,
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      },
    });
    
}
