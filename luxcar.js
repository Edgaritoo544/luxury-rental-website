const cars = [
    { id: 1, name: "GT-R", brand: "Nissan", category: "Sports Car", image: "gtr.jpg", price: 499, year: 2024, horsepower: 565, seats: 4 },
    { id: 2, name: "Escalade", brand: "Cadillac", category: "SUV", image: "caddi.jpg", price: 599, year: 2024, horsepower: 420, seats: 7 },
    { id: 3, name: "7 Series", brand: "BMW", category: "Luxury Sedan", image: "bmw.jpg", price: 549, year: 2024, horsepower: 523, seats: 5 },
    { id: 4, name: "F-Type", brand: "Jaguar", category: "Sports Car", image: "f-type.jpg", price: 479, year: 2024, horsepower: 575, seats: 2 },
    { id: 5, name: "RS e-tron GT", brand: "Audi", category: "Electric", image: "etron.jpg", price: 699, year: 2024, horsepower: 637, seats: 4 },
    { id: 6, name: "Model X", brand: "Tesla", category: "Electric", image: "tesla.jpg", price: 649, year: 2024, horsepower: 670, seats: 7 },
    { id: 7, name: "S-Class", brand: "Mercedes-Maybach", category: "Luxury Sedan", image: "merc.jpg", price: 799, year: 2024, horsepower: 496, seats: 5 },
    { id: 8, name: "911 Turbo S", brand: "Porsche", category: "Sports Car", image: "porsche.jpg", price: 749, year: 2024, horsepower: 640, seats: 4 }
];

function renderCarCard(car) {
    return `
        <div class="car-card">
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

function renderFeaturedCars() {
    const container = document.getElementById('featured-cars');
    if (container) {
        container.innerHTML = cars.slice(0, 3).map(renderCarCard).join('');
    }
}

function renderAllCars() {
    const container = document.getElementById('all-cars');
    if (container) {
        container.innerHTML = cars.map(renderCarCard).join('');
    }
}

renderFeaturedCars();
renderAllCars();
