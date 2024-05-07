import Chart from 'chart.js/auto';

// Define the initial data for the chart
const initialData = [
    { year: 2020, count: 10 },
    { year: 2021, count: 20 },
    { year: 2022, count: 15 }
];

// Create the Chart.js configuration object
const chartConfig = {
    type: 'bar',
    data: {
        labels: initialData.map(item => item.year),
        datasets: [
            {
                label: 'test',
                data: initialData.map(row => row.count)
            }
        ]
    }
};

const chart = new Chart(
    document.getElementById('main'),
    chartConfig
);

document.querySelector("#button").addEventListener("click", e => {
    let text = document.querySelector("#input").value;
    let number = document.querySelector("#count").value;

    let newItem = { year: text, count: parseInt(number) };

    initialData.push(newItem);

    updateChartData(initialData);
});

function updateChartData(data) {
    chart.data.labels = data.map(row => row.year);
    chart.data.datasets[0].data = data.map(row => row.count);
    chart.update();
}