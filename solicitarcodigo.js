function solicitarCodigo(event) {
  // Pide al usuario que ingrese el código
  var codigoIngresado = prompt("Ingresa el código:");

  // Verifica si el código ingresado es correcto (puedes cambiar "codigoCorrecto" por el código que desees)
  if (codigoIngresado === "713") {
    // Si es correcto, redirige al usuario a universo.html
    swal("Código correcto. ¡Bienvenido al viaje al Universo!");

    // Puedes descomentar la siguiente línea si deseas permitir que el enlace funcione después de ingresar el código correcto
    // window.location.replace("universo.html");
  } else {
    // Si es incorrecto, muestra un mensaje de error y evita la acción predeterminada del enlace
    swal(
      "Codigo incorrecto",
      "Código incorrecto. No tienes acceso a esta página."
    );
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada
  }
}

//Venta de cafe
function solicitarCodigo3(event) {
  swal({
    title: "Seguro que quieres continuar",
    text: "La venta de café estará pronto disponible",
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
        swal("Código correcto. ¡Bienvenido al viaje al Universo!", {
          icon: "success",
        }).then(() => {
          window.location.replace("universo.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error
        swal("Código incorrecto", "No tienes acceso a esta página.", "error");
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}
