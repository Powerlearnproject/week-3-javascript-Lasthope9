// Declaration of Functions

//Data Type


//String
var name = "John";


//Number
let age = 30;
let height = 170.5;
let sum = age + height;
console.log('sum');


//Boolean
const nature = true;
console.log('nature');

//Define and call functions

//Add
const add = function(a, b) {
    return a + b;
};
console.log(add(10, 15));

//Subtract
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 15));

//Multiply
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(10, 15));

//Divide
const divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 15));

//Manipulation
document.getElementById('btn').addEventListener('click', function() {
    let inputText = document.getElementById('text').value;
    document.getElementById('output').textContent = inputText;
});


//Chats and Graphs
const ctx = document.getElementById('mychart').getContext('2d');
const ctx2 = document.getElementById('mychart2').getContext('2d');
const ctx3 = document.getElementById('mychart3').getContext('2d');

// Pie chart
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3.6, 5, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(255, 32, 240)',
                'rgba(160, 32, 240)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });

// Bar Graph
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3.6, 5, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(255, 32, 240)',
                'rgba(160, 32, 240)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });

//Line Graph
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3.6, 5, 15, 3],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(255, 32, 240)',
                'rgba(160, 32, 240)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
