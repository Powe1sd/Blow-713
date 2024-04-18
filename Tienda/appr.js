function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function toggleSubmenu() {
  var submenu = document.getElementById("submenu");
  submenu.classList.toggle("active");
}

// Función para mostrar u ocultar las opciones de categoría
function toggleCategory() {
  var categoryOptions = document.getElementById("category-options");
  categoryOptions.classList.toggle("active");
}

/* Seccion img */
// Arreglo de productos
const camisas = [
  {
    id: 101,
    name: "Camisas",
    price: "45.000",
    image: "camisas/cami1.webp",
  },
  {
    id: 103,
    name: "Camisas",
    price: "22.000",
    image: "camisas/cami2.webp",
  },
  { id: 104, name: "Camisas", price: "32.000", image: "camisas/cami3.jpeg" },
  { id: 105, name: "Camisas", price: "28.000", image: "camisas/cami4.jpeg" },
  { id: 106, name: "Camisas", price: "45.000", image: "camisas/cami5.jpeg" },
  { id: 106, name: "Camisas", price: "45.000", image: "camisas/cami6.jpeg" },
];

const gorras = [
  { id: 201, name: "Gorra Negra", price: "20.00", image: "gorras/gorra1.jpeg" },
  {
    id: 202,
    name: "Gorra Verde clara",
    price: "25.00",
    image: "gorras/gorra2.jpeg",
  },
  { id: 203, name: "Gorra Roja", price: "18.00", image: "gorras/gorra3.jpeg" },
  {
    id: 201,
    name: "Gorra Blanca",
    price: "20.00",
    image: "gorras/gorra4.jpeg",
  },
  { id: 202, name: "Gorra Gris", price: "25.00", image: "gorras/gorra5.jpeg" },
  { id: 203, name: "Gorra Negra", price: "18.00", image: "gorras/gorra6.jpeg" },
];

// Función para mostrar los productos
// Función para mostrar los productos
function showProducts() {
  const shirtsProducts = document.getElementById("shirtsProducts");
  const gorrasProducts = document.getElementById("gorrasProducts");

  camisas.forEach((producto) => {
    shirtsProducts.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <img class="card-img-top" src="${producto.image}" alt="${producto.name}">
            <div class="card-body">
              <h4 class="card-title">${producto.name}</h4>
              <p class="card-text">Precio: $${producto.price}</p>
            </div>
          </div>
        </div>
      `;
  });

  gorras.forEach((producto) => {
    gorrasProducts.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <div class="image-container" onclick="expandImage(this)">
              <img class="card-img-top" src="${producto.image}" alt="${producto.name}">
            </div>
            <div class="card-body">
              <h4 class="card-title">${producto.name}</h4>
              <p class="card-text">Precio: $${producto.price}</p>
            </div>
          </div>
        </div>
      `;
  });
}

// Función para mostrar los productos de gorras

// Función para mostrar u ocultar las opciones de categoría
function toggleCategory() {
  var categoryOptions = document.getElementById("category-options");
  categoryOptions.classList.toggle("active");
}

// Mostrar los productos al cargar la página
window.onload = showProducts;
