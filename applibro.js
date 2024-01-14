// Obtén el botón por su id y tambien habre el libro mio en otra ventana y lo redirige
var btnEnlace = document.getElementById("enlaceLibro");

// Agrega un evento de clic al botón
btnEnlace.addEventListener("click", function () {
  // Abre una nueva ventana
  window.open("Libro/index.html", "_blank");
});
