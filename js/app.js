function mostrarModal(nombre, descripcion, rutaImagen) {
    // Mostrar el modal
    document.getElementById("nombreProductoModal").innerText = nombre;
    document.getElementById("descripcionProductoModal").innerText =
      descripcion;
    document.getElementById("imagenProductoModal").src = rutaImagen;
    document.getElementById("modal").style.backgroundColor = "yelow"; // Cambia el color del fondo del modal
    document.getElementById("modal").style.display = "flex";
  }

  function cerrarModal() {
    // Cerrar el modal
    document.getElementById("modal").style.display = "none";
  }