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
  {
    id: 201,
    name: "Gorra Negra",
    price: "20.000",
    image: "gorras/gorra1.jpeg",
  },
  {
    id: 202,
    name: "Gorra Verde clara",
    price: "25.00",
    image: "gorras/gorra2.jpeg",
  },
  { id: 203, name: "Gorra Roja", price: "18.000", image: "gorras/gorra3.jpeg" },
  {
    id: 201,
    name: "Gorra Blanca",
    price: "20.000",
    image: "gorras/gorra4.jpeg",
  },
  { id: 202, name: "Gorra Gris", price: "25.000", image: "gorras/gorra5.jpeg" },
  {
    id: 203,
    name: "Gorra Negra",
    price: "18.000",
    image: "gorras/gorra6.jpeg",
  },
];
function showProducts() {
  const shirtsProducts = document.getElementById("shirtsProducts");
  const gorrasProducts = document.getElementById("gorrasProducts");

  camisas.forEach((producto) => {
    shirtsProducts.innerHTML += `
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

// Función para mostrar los productos
// Función para mostrar los productos

// Función para mostrar los productos de gorras

// Función para mostrar u ocultar las opciones de categoría
function toggleCategory() {
  var categoryOptions = document.getElementById("category-options");
  categoryOptions.classList.toggle("active");
}

// Mostrar los productos al cargar la página
window.onload = showProducts;

// Función para expandir las imágenes al hacer clic
function expandImage(imageContainer) {
  // Verificar si la imagen está expandida
  const isExpanded = imageContainer.classList.contains("expanded");

  // Cambiar el tamaño de la imagen al hacer clic
  imageContainer.classList.toggle("expanded");

  if (!isExpanded) {
    // Crear el botón de cierre solo si la imagen se está expandiendo
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;"; // Utilizar una X como contenido del botón
    closeButton.classList.add("close-button");

    // Establecer estilos para el botón de cierre
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px"; // Ajustar la posición vertical según sea necesario
    closeButton.style.right = "10px"; // Ajustar la posición horizontal según sea necesario
    closeButton.style.background = "transparent";
    closeButton.style.border = "none";
    closeButton.style.color = "#fff";
    closeButton.style.fontSize = "24px";
    closeButton.style.cursor = "pointer";

    // Agregar un evento de clic al botón de cierre para contraer la imagen
    closeButton.addEventListener("click", function (event) {
      // Evitar que el evento de clic se propague al contenedor de la imagen
      event.stopPropagation();

      imageContainer.classList.remove("expanded");
      closeButton.remove(); // Remover el botón de cierre después de contraer la imagen
    });

    // Agregar el botón de cierre al contenedor de la imagen expandida
    imageContainer.appendChild(closeButton);

    // Guardar una referencia al botón de cierre para poder eliminarlo más tarde
    imageContainer.closeButton = closeButton;
  }

  // Agregar un event listener al documento para contraer la imagen cuando se haga clic fuera de ella
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".expanded")) {
      imageContainer.classList.remove("expanded");
      if (imageContainer.closeButton) {
        imageContainer.closeButton.remove(); // Eliminar el botón de cierre si existe
        imageContainer.closeButton = null; // Limpiar la referencia al botón de cierre
      }
    }
  });
}

/* Efecto zoom */
