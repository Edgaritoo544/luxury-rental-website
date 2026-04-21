// Car Data
const cars = [
    {
        id: 1,
        name: "GT-R",
        brand: "Nissan",
        category: "Sports Car",
        image: "file:///C:/Users/641647/Downloads/download%20(3).gtr.jpg",
        price: 499,
        year: 2024,
        horsepower: 565,
        transmission: "Automatic",
        seats: 4,
        description: "The iconic Nissan GT-R delivers supercar performance with all-wheel drive capability and a twin-turbocharged engine that produces exhilarating acceleration."
    },
    {
        id: 2,
        name: "Escalade",
        brand: "Cadillac",
        category: "SUV",
        image: "file:///C:/Users/641647/Downloads/download%20(3).caddi.jpg",
        price: 599,
        year: 2024,
        horsepower: 420,
        transmission: "Automatic",
        seats: 7,
        description: "The Cadillac Escalade represents the pinnacle of luxury SUVs, combining commanding presence with refined comfort and cutting-edge technology."
    },
    {
        id: 3,
        name: "7 Series",
        brand: "BMW",
        category: "Luxury Sedan",
        image: "file:///C:/Users/641647/Downloads/download%20(3).bmw.jpg",
        price: 549,
        year: 2024,
        horsepower: 523,
        transmission: "Automatic",
        seats: 5,
        description: "The BMW 7 Series epitomizes executive luxury with its sophisticated design, powerful engines, and state-of-the-art driver assistance systems."
    },
    {
        id: 4,
        name: "F-Type",
        brand: "Jaguar",
        category: "Sports Car",
        image: "file:///C:/Users/641647/Downloads/download%20(3).f-type.jpg",
        price: 479,
        year: 2024,
        horsepower: 575,
        transmission: "Automatic",
        seats: 2,
        description: "The Jaguar F-Type is a stunning sports car that combines British elegance with raw performance and a soundtrack that stirs the soul."
    },
    {
        id: 5,
        name: "RS e-tron GT",
        brand: "Audi",
        category: "Electric",
        image: "file:///C:/Users/641647/Downloads/download%20(3).etron.jpg",
        price: 699,
        year: 2024,
        horsepower: 637,
        transmission: "Automatic",
        seats: 4,
        description: "The Audi RS e-tron GT represents the future of performance with instant electric power delivery and stunning quattro handling dynamics."
    },
    {
        id: 6,
        name: "Model X",
        brand: "Tesla",
        category: "Electric",
        image: "file:///C:/Users/641647/Downloads/download%20(3).tesla.jpg",
        price: 649,
        year: 2024,
        horsepower: 670,
        transmission: "Automatic",
        seats: 7,
        description: "The Tesla Model X combines electric performance with SUV versatility, featuring falcon-wing doors and cutting-edge autonomous driving technology."
    },
    {
        id: 7,
        name: "S-Class",
        brand: "Mercedes-Maybach",
        category: "Luxury Sedan",
        image: "file:///C:/Users/641647/Downloads/download%20(3).merc.jpg",
        price: 799,
        year: 2024,
        horsepower: 496,
        transmission: "Automatic",
        seats: 5,
        description: "The Mercedes-Maybach S-Class redefines automotive luxury with unparalleled comfort, exquisite craftsmanship, and the latest in automotive innovation."
    },
    {
        id: 8,
        name: "911 Turbo S",
        brand: "Porsche",
        category: "Sports Car",
        image: "file:///C:/Users/641647/Downloads/download%20(3)porsche.jpg",
        price: 749,
        year: 2024,
        horsepower: 640,
        transmission: "Automatic",
        seats: 4,
        description: "The Porsche 911 Turbo S is the ultimate expression of sports car engineering, delivering blistering performance with everyday usability."
    }
];

// Render car cards
function renderCarCard(car) {
    return `
        <div class="car-card" onclick="showCarDetail(${car.id})">
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="car-info">
                <div class="car-category">${car.category}</div>
                <h3 class="car-name">${car.name}</h3>
                <p class="car-brand">${car.brand}</p>
                <div class="car-specs">
                    <span class="car-spec">${car.year}</span>
                    <span class="car-spec">${car.horsepower} HP</span>
                    <span class="car-spec">${car.seats} Seats</span>
                </div>
                <div class="car-price">
                    $${car.price}<span class="car-price-period">/day</span>
                </div>
            </div>
        </div>
    `;
}

// Render featured cars (first 3)
function renderFeaturedCars() {
    const featuredCarsContainer = document.getElementById('featured-cars');
    const featuredCars = cars.slice(0, 3);
    featuredCarsContainer.innerHTML = featuredCars.map(renderCarCard).join('');
}

// Render all cars
function renderAllCars() {
    const allCarsContainer = document.getElementById('all-cars');
    allCarsContainer.innerHTML = cars.map(renderCarCard).join('');
}

// Show car detail modal


    // Render cars
    renderFeaturedCars();
    renderAllCars();

    // Handle navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

   
    

