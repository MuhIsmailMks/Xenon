// navbar handler
const menu_btn = document.querySelector('.menu-btn');
const ul = document.querySelector('nav ul');
menu_btn.addEventListener('click', () => {
    ul.classList.toggle('active')
})

let particleAmount;

if (window.innerWidth > 1000) {
    particleAmount = 200;
} else {
    particleAmount = 100;
}


// loader
document.addEventListener('DOMContentLoaded', function () {  

   setTimeout(() => {
    document.querySelector('.loading').classList.add('show');

    // scroll reveal animation
    AOS.init({
        once: true
    });

    // particle
    particlesJS('gradients_home',
        {
          "particles": {
            "number": {
              "value": 100, // Jumlah partikel (bintang)
              "density": {
                "enable": true,
                "value_area": particleAmount // Kepadatan partikel
              }
            },
            "color": {
              "value": "#ffffff" 
            },
            "shape": {
              "type": "star", // Bentuk partikel
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
            },
            "opacity": {
              "value": .5, // Opasitas partikel
              "random": false
            },
            "size": {
              "value": .5, // Ukuran partikel
              "random": true
            },
            "line_linked": {
              "enable": false // Tidak ada garis penghubung antar partikel
            },
            "move": {
              "enable": true, // Mengaktifkan gerakan partikel
              "speed": .1, // Kecepatan gerakan
              "direction": "left", // Gerakan acak
              "random": true,
              "straight": false,
              "out_mode": "out", // Partikel keluar dari batas layar
              "bounce": false
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true, // Efek saat kursor di atas partikel
                "mode": "repulse" // Partikel menjauh saat kursor mendekat
              },
              "onclick": {
                "enable": true, // Efek saat diklik
                "mode": "push" // Menambahkan lebih banyak partikel saat diklik
              }
            },
            "modes": {
              "repulse": {
                "distance": 100, // Jarak partikel menjauh dari kursor
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4 // Jumlah partikel yang ditambahkan saat diklik
              }
            }
          },
          "retina_detect": true // Deteksi untuk layar retina
        }
      );
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


// video
document.addEventListener("DOMContentLoaded", function() {
    let videoServices = document.querySelectorAll('.video_service');

    function playVideo(video) {
        if (video.paused) {
            video.play().catch(function(error) {
                console.error("Video play was prevented:", error);
            });
        }
    }
 
    for (let video of videoServices) { 
        video.addEventListener('play', function() {
            video.muted = true;
        });
 
        video.addEventListener('loadeddata', function() {
            playVideo(video);
        });
 
        video.muted = true;
        video.controls = false;
    }
});
 
document.addEventListener('DOMContentLoaded', function() {
    let videos = document.querySelectorAll('.video_service');
    videos.forEach(function(video) {
        video.addEventListener('canplaythrough', function() {
            video.play();
        }, true);
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

 




  

document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah link melakukan navigasi default
  const newUrl = this.href.replace('.html', ''); // Menghapus '.html' dari URL
  history.pushState(null, '', newUrl); // Mengubah URL di address bar
  window.location.href = this.href; // Melakukan navigasi ke halaman yang dituju
});
