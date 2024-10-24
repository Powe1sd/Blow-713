document.addEventListener("DOMContentLoaded", function () {
  // Crear un elemento <link> para vincular el archivo CSS
  var cssLink = document.createElement("link");
  cssLink.href = "/styleingles.css"; // Especifica la ruta de tu archivo CSS
  cssLink.rel = "stylesheet"; // Especifica que es un archivo de estilo
  cssLink.type = "text/css"; // Especifica el tipo MIME del archivo CSS

  // Agregar el elemento <link> al elemento <head> del documento HTML
  document.head.appendChild(cssLink);

  // Luego, puedes utilizar SweetAlert2 y cualquier otro código JavaScript que necesites
  swal({
    title: "TECH-77",
    text: "Código de ingreso  7131, Ingles modulo 1. Derechos de autor Brayhan Estiven Coy Rubio",
    icon: "success",
    button: "Aceptar",
    className: "custom-swal", // Clase personalizada para la alerta
  });
});

// Función para solicitar código
document.addEventListener("DOMContentLoaded", function () {
  function solicitarCodigo(event) {
    // Crear un elemento <link> para vincular el archivo CSS
    var cssLink = document.createElement("link");
    cssLink.href = "/styleingles.css"; // Especifica la ruta de tu archivo CSS
    cssLink.rel = "stylesheet"; // Especifica que es un archivo de estilo
    cssLink.type = "text/css"; // Especifica el tipo MIME del archivo CSS

    // Agregar el elemento <link> al elemento <head> del documento HTML
    document.head.appendChild(cssLink);

    swal({
      title: "Seguro que quieres continuar",
      text: "Odisea estelar",
      buttons: {
        cancel: true,
        confirm: {
          text: "Continuar",
          value: true,
          visible: true,
          className: "btn-primary",
          closeModal: true,
        },
      },
      closeOnClickOutside: false,
      closeOnEsc: false,
    }).then((confirm) => {
      if (confirm) {
        var codigoIngresado = prompt("Ingresa el código:");
        var codigosPermitidos = ["713"]; // Array con los códigos permitidos

        // Verifica si el código ingresado está en el array de códigos permitidos
        if (codigosPermitidos.includes(codigoIngresado)) {
          // Si es correcto, redirige al usuario a universo.html
          window.location.href = "universo.html";
        } else {
          // Si es incorrecto, muestra un mensaje de error
          swal("Código incorrecto", "No tienes acceso a esta página.", "error");
        }
      }
    });
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada
  }

  // Asignar la función solicitarCodigo al botón
  document
    .getElementById("botonRedireccion")
    .addEventListener("click", solicitarCodigo);
});
