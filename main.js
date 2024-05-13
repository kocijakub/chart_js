import Chart from 'chart.js/auto';


let data2 = [
    {name: "A", count: 5},
    {name: "B", count: 7},
    {name: "C", count: 4},
    {name: "D", count: 2},


]

const dataSetup = {
    labels: data2.map( item => item.name),
    datasets: [{
        label: 'Area Dataset',
        data: data2.map( item => item.count),
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(150, 99, 132)',
            'rgb(150, 255, 132)',
            'rgb(150, 100, 230)',
            'rgb(50, 120, 120)',
            'rgb(50, 255, 230)',




        ]
    }]
};
const config = {
    type: 'polarArea',
    data: dataSetup,
    options: {}
};

const areaChart = new Chart(
    document.querySelector("#aTab"),
    config
)

const areaInputType = document.querySelector("#areaSelect")
function appentOption(){
    data2.map(item =>{
        let option = document.createElement("option")
        option.value = item.name
        option.textContent = item.name
        areaInputType.appendChild(option)
    })
}
appentOption()
document.querySelector(".areaChart").appendChild(areaInputType)

document.querySelector("#areaSubmit").addEventListener("click", e =>{
    let type = areaInputType.value
    let count = document.querySelector("#areaCount").value
    if(count !== ""){
        let item = data2.filter(item =>{
            return item.name === type
        })
        data2[data2.indexOf(item[0])].count = parseInt(data2[data2.indexOf(item[0])].count ) + parseInt(count)
        areaChart.data.datasets[0].data = data2.map( item => item.count)
        areaChart.update()
    }
})

document.querySelector("#areaAddSubmit").addEventListener("click", e =>{
    let count = document.querySelector("#areaAddNum").value
    let name = document.querySelector("#areaAddName").value
    if(count !== "" && name !== ""){
        let isNew = true
        data2.forEach(item =>{
            if(item.name === name) isNew = false
        })
        if(isNew){
            data2.push({name:name,count:count})
            areaChart.data.labels = data2.map( item => item.name)
            areaChart.data.datasets[0].data = data2.map( item => item.count)
            areaChart.update()
            areaInputType.innerHTML = ""
            appentOption()
        }
    }
})