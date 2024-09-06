// navbar handler
const menu_btn = document.querySelector('.menu-btn');
const ul = document.querySelector('nav ul');
menu_btn.addEventListener('click', () => {
    ul.classList.toggle('active')
})

// loader
document.addEventListener('DOMContentLoaded', function () { 
   setTimeout(() => {
    document.querySelector('.loading').classList.add('show');

// scroll reveal animation
    AOS.init({
        once: true
    });
    
   }, 6000);
});

// address  
let addressContainer = document.querySelector('.address_form'); 

addressContainer.addEventListener('click', function() { 
    let addressText = addressContainer.querySelector('.address_form span').textContent;
 
    navigator.clipboard.writeText(addressText)
        .then(function() { 
            alert('Address has been copied!');
        })
        .catch(function(error) { 
            alert('Cannot copy address:' + error);
        });
});

// chart

let ctx = document.getElementById('myPieChart').getContext('2d');

let myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["LIQUIDITY POOL", "TEAM", "ADVISORIES"],
        datasets: [{
            data: [90,5,5],
            backgroundColor: [
                '#16c1ec',
                '#8B93FF', 
                '#FF9800',
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false 
        },
        tooltips: {
            enabled: false, 
            callbacks: {
                label: function(tooltipItem, data) {
                    let dataset = data.datasets[tooltipItem.datasetIndex];
                    let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                        return previousValue + currentValue ;
                    });
                    let currentValue = dataset.data[tooltipItem.index];
                    let percentage = ((currentValue / total) * 100).toFixed(2);
                    return data.labels[tooltipItem.index] + ": " + currentValue + " (" + percentage + "%)";
                }
            }
        }
    }
});

 



  