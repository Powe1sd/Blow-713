function solicitarCodigo(event) {
  swal({
    title: "Seguro que quieres continuar",
    text: "Odisea estelar",
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingresa el código",
        type: "password", // Cambiar el tipo de campo a "password"
      },
    },
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
      var codigoIngresado = document.querySelector(
        ".swal-content__input"
      ).value; // Obtener el valor del input
      var codigosPermitidos = ["713"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
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

//Venta de cafe
function solicitarCodigo3(event) {
  swal({
    title: "Seguro que quieres continuar",
    text: "La venta de café estará pronto disponible",
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingresa el código",
        type: "password", // Cambiar el tipo de campo a "password"
      },
    },
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
      var codigoIngresado = document.querySelector(
        ".swal-content__input"
      ).value; // Obtener el valor del input
      var codigosPermitidos = ["713"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal("Código correcto. ¡Bienvenido a COY COFFE !", {
          icon: "success",
        }).then(() => {
          window.location.replace("index2.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error
        swal("Código incorrecto", "No tienes acceso a esta página.", "error");
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

/* ingles */

function solicitarCodigo4(event) {
  swal({
    title: "Bienvenido",
    text: "Gracias por visitar nuestro sitio web",
    icon: "success",
    button: "Entendido",
  });

  swal({
    title: "Súper descuento",
    text: "Solicita tu código de ingreso para poder tener el curso completo, o escribe al número 3052076713 ",
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingresa el código",
        type: "password", // Cambiar el tipo de campo a "password"
      },
    },
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
    textColor: "black", // Cambia el color del texto a rojo
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.querySelector(
        ".swal-content__input"
      ).value; // Obtener el valor del input
      var codigosPermitidos = ["713"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal("Código correcto. ¡Bienvenido al curso de inglés!", {
          icon: "success",
        }).then(() => {
          window.location.replace(
            "https://tempssll.github.io/videos-blow-713/"
          );
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error
        swal("Código incorrecto", "No tienes acceso a esta página.", "error");
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

/* Libro */
function solicitarCodigo6(event) {
  swal({
    title: "Súper descuento",
    text: "Ingresa el código para acceder al libro.",
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingresa el código",
        type: "password",
        id: "codigo-ingreso",
      },
    },
    buttons: {
      cancel: true,
      confirm: {
        text: "Ingresar",
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
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["713"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal("Código correcto", "¡Bienvenido al libro!", "success").then(() => {
          window.location.replace("libro.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error
        swal("Código incorrecto", "No tienes acceso a esta página.", "error");
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}
