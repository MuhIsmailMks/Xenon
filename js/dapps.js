AOS.init({
    once: true
});

let choiseContainer = document.querySelector('.choise_container')
let choiseContainerBtn = document.querySelector('.choise_container_btn')

choiseContainerBtn.addEventListener('click', () => {
choiseContainer.classList.toggle('active')
})

const dropdown_menu = document.querySelector('.dropdown-menu');
const white_btn = document.querySelector('.white_btn');

document.body.addEventListener('click', (event) => {
if (!dropdown_menu.contains(event.target) && !white_btn.contains(event.target)) {
    choiseContainer.classList.remove('active')
}
});



// search
function filterCards() {
let input = document.getElementById('searchInput').value.toLowerCase();
let cards = document.querySelectorAll('.gpu-card');

cards.forEach(card => {
let title = card.querySelector('h2').textContent.toLowerCase();
if (title.includes(input)) {
    card.style.display = "block";
} else {
    card.style.display = "none";
}
});

}

let cards = document.querySelectorAll('.gpu-card');
function filterCategory(category) {
  

    cards.forEach(card => {
        let cardCategories = card.getAttribute('data-category').split(',').map(cat => cat.trim());
        if (category === 'ALL' || cardCategories.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

const choiseBtn = document.querySelectorAll('.choiseBtn');
const typeCategory = document.querySelector('.typeCategory');


choiseBtn.forEach(btn => {
    const pBtn = btn.querySelector('p')
    const iconBtn = btn.querySelector('span')
    btn.addEventListener('click', () => {
        let category = btn.getAttribute('data-category');;
        
        cards.forEach(card => {
            let cardCategories = card.getAttribute('data-category').split(',').map(cat => cat.trim());
            if (category === 'ALL' || cardCategories.includes(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        choiseBtn.forEach(otherBtn => {
            const otherIcon = otherBtn.querySelector('span');
            otherIcon.classList.add('hidden');  
        });
        
        iconBtn.classList.remove('hidden');
        typeCategory.innerHTML = pBtn.innerHTML
    })
})


// particle hero animation
particlesJS("particles-js", {
"particles": {
"number": {
"value": 100,
"density": {
"enable": true,
"value_area": 800
}
},
"color": {
"value": "#ffffff"
},
"shape": {
"type": "circle",
"stroke": {
"width": 0,
"color": "#000000"
}
},
"opacity": {
"value": 1,
"random": true,
"anim": {
"enable": true,
"speed": 0.5,
"opacity_min": 0,
"sync": false
}
},
"size": {
"value": 4,
"random": true,
"anim": {
"enable": true,
"speed": 20,
"size_min": 0.3,
"sync": false
}
},
"rotate": {
"value": 0,
"random": true,
"direction": "clockwise",
"animation": {
"enable": true,
"speed": 5,
"sync": false
}
},
"line_linked": {
"enable": true,
"distance": 150,  // Mengatur jarak antara garis
"color": "#ffffff",
"opacity": 0.4,
"width": 1
},
"move": {
"enable": true,
"speed": 6,  // Kecepatan partikel agar terlihat seperti bintang jatuh
"direction": "none",
"random": true,
"straight": false,
"out_mode": "out",  // Partikel akan keluar dari layar saat jatuh
"attract": {
"enable": false,
"rotateX": 600,
"rotateY": 1200
}
}
},
"interactivity": {
"events": {
"onhover": {
"enable": true,
"mode": "repulse"
},
"onclick": {
"enable": true,
"mode": "push"
},
"resize": true
},
"modes": {
"repulse": {
"distance": 100,
"duration": 0.4
},
"push": {
"particles_nb": 4
}
}
},
"retina_detect": true
});

 