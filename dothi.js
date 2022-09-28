var nhietdo = document.getElementById('a');
var doam = document.getElementById('b');
var anhsang = document.getElementById('c');
var den = document.getElementById('btbg1');
var dieuhoa = document.getElementById('btbg2');

function check() {
let term = Math.floor(Math.random() * 101);
let humi = Math.floor(Math.random() * 101);
let light = Math.floor(Math.random() * 101);

document.getElementById('Term').innerHTML = term + "&degC";
document.getElementById('Humi').innerHTML = humi + "%";
document.getElementById('Light').innerHTML = light + "lux";

    function updateChart(){
        update.data.datasets[0].data.push(term)
        update.data.datasets[1].data.push(humi)
        update.data.datasets[2].data.push(light)
        update.data.labels.push(new Date().getSeconds());
        update.update()
        if(update.data.labels.length > 10){
        update.data.datasets[0].data.shift()
        update.data.datasets[1].data.shift()
        update.data.datasets[2].data.shift()
        update.data.labels.shift()
        }
    }

    updateChart()

    if(term <= 10) {
        nhietdo.style.backgroundColor = 'cyan'; 

    }
    else if(term <=35) {
        nhietdo.style.backgroundColor = 'lime';
    }
    else {
        nhietdo.style.backgroundColor = 'red';
    }

    if(humi <= 10) {
        doam.style.backgroundColor = 'SaddleBrown'; 

    }
    else if(humi <=35) {
        doam.style.backgroundColor = 'blue';
    }
    else {
        doam.style.backgroundColor = 'MidnightBlue';
        doam.style.color = "white";
    }

    if(light <= 10) {
        anhsang.style.backgroundColor = 'black'; 
        anhsang.style.color = "white";

    }
    else if(light <=35) {
        anhsang.style.backgroundColor = 'yellow';
    }
    else {
        anhsang.style.backgroundColor = 'white';
        anhsang.style.color = 'black'
    }
}

const update = new Chart("myChart", {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
            label: "nhiệt độ",
            borderColor: "red",
            backgroundColor: "red",
            lineTension: 0.5,
            data: []
            },
            {
            label: "độ ẩm",
            borderColor: "blue",
            backgroundColor: "blue",
            lineTension: 0.5,
            data: []
            },
            {
            label: "ánh sáng",
            borderColor: "orange",
            backgroundColor: "orange",
            lineTension: 0.5,
            data: [],
            }
        ]
    },
    options : {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time(s)"
                }
            }
        }
    }
})

setInterval(check, 2000);