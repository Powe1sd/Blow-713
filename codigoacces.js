document.addEventListener("DOMContentLoaded", function () {
  swal({
    title: "Hola",
    text: "Hay un súper descuento para el curso de inglés antes $85.000, ahora lo puedes obtener por tan solo $69.900",
    icon: "success",
    button: "Aceptar",
  });
});

// Función para solicitar código
function solicitarCodigo(event) {
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
