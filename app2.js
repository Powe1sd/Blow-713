// Datos simulados de productos para café molido
const cafeMolido = [
  {
    id: 101,
    name: "CAFÉ MOLIDO",
    image: "cafeuno.jpeg",
  },
  {
    id: 102,
    name: "CAFÉ MOLIDO",

    image: "cafedos.jpeg",
  },
  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafetres.jpeg",
  },

  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafecuatro.jpeg",
  },

  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafecinco.jpeg",
  },

  //SEGUNDA SECCION CAFE
  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafeseis.jpeg",
  },
  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafesiete.jpeg",
  },
  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafeocho.jpeg",
  },
  {
    id: 101,
    name: "CAFÉ MOLIDO",

    image: "cafenueve.jpeg",
  },
  {
    id: 101,
    name: "CAFÉ MOLIDO",
    image: "cafedies.jpeg",
  },
];

//************************************************************************** */

// Datos simulados de productos para café en grano
const cafeEnGrano = [
  {
    id: 201,
    name: "CAFÉ EN GRANO",
    image: "cafegranouno.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranodos.jpeg",
  },

  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranotres.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranocuatro.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafecinco.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranoseis.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranosiete.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranoocho.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranonueve.jpeg",
  },
  {
    id: 202,
    name: "CAFÉ EN GRANO",
    image: "cafegranouno.jpeg",
  },

  // Agrega más productos de café en grano aquí
];

// Función para cargar imágenes dinámicamente en una sección
function cargarImagenesEnSeccion(seccion, productos) {
  const contenedor = document.querySelector(seccion);

  productos.forEach((producto) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.src = `imagenes/${producto.image}`;
    productImage.alt = producto.name;
    productImage.classList.add("product-image");
    productItem.appendChild(productImage);

    const productName = document.createElement("div");
    productName.textContent = producto.name;
    productName.classList.add("product-name");
    productItem.appendChild(productName);

    const productPrice = document.createElement("div");
    productPrice.textContent = `$${producto.price}`;
    productPrice.classList.add("product-price");
    productItem.appendChild(productPrice);

    contenedor.appendChild(productItem);
  });
}

// Cargar imágenes de café molido en la sección "Café molido"
cargarImagenesEnSeccion("#cafe-molido-section", cafeMolido);

// Cargar imágenes de café en grano en la sección "Café en Grano"
cargarImagenesEnSeccion("#cafe-en-grano-section", cafeEnGrano);

//REPRODUCIR EL VIDEO
// Función para cargar el video de manera automática y reproducirlo
function cargarVideo() {
  const videoElement = document.getElementById("video");
  videoElement.play();
}

// Llama a la función para cargar y reproducir el video al cargar la página
cargarVideo();

// JavaScript (app.js)
document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("video");
  videoElement.play();
});

/* seccion boton despliegue  de boton*/
function toggleProductos() {
  var productosSection = document.getElementById("productosSection");
  if (productosSection.style.display === "none") {
    productosSection.style.display = "block";
  } else {
    productosSection.style.display = "none";
  }
}

toggleProducto();

// Agregamos la clase "productods-fixed" al botón cuando alcance cierta posición
window.onscroll = function () {
  var button = document.querySelector(".productods");
  var distanciaDesdeArriba = button.offsetTop;
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > distanciaDesdeArriba) {
    button.classList.add("productods-fixed");
  } else {
    button.classList.remove("productods-fixed");
  }
};
