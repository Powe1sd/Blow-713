//Venta de cafe
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
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto. ¡Bienvenido al universo  !",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("universo.html");
        });
        // Reproducir audio de éxito
        document.getElementById("audio-success").play();
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          buttons: false, // No muestra botones
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
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
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto. ¡Bienvenido a COY COFFE !",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("index2.html");
        });
        // Reproducir audio de éxito
        document.getElementById("audio-success").play();
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          buttons: false, // No muestra botones
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

/* ingles */
function solicitarCodigo4(event) {
  swal({
    title: "Súper descuento",
    text: "Solicita tu código de ingreso para poder tener el curso completo, o escribe al número 3052076713, PAGO ÚNICO",
    content: {
      element: "input",
      attributes: {
        placeholder: "Ingresa el código",
        type: "password",
        id: "codigo-ingreso",
        oninput: "vibrarDispositivo()", // Llamada a la función vibrarDispositivo() cuando se introduce texto
      },
    },
    buttons: {
      cancel: {
        text: "Cancelar",
        visible: true,
        className: "btn-secondary",
        closeModal: true,
      },
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
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenidos !",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("login/login.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
          closeModal: true, // Cierra automáticamente después de mostrarse
          timer: 3000,
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

function vibrarDispositivo() {
  // Comprueba si el dispositivo admite la API de vibración
  if ("vibrate" in navigator) {
    // Hace que el dispositivo vibre durante 100 milisegundos
    navigator.vibrate(100);
  }
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
    timer: 5000, // Tiempo en milisegundos antes de que la alerta se cierre automáticamente (en este caso, 5 segundos)
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenido al libro!",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("libro.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

/* Paz mundial */
function solicitarCodigo13(event) {
  swal({
    title: "Súper descuento",
    text: "Ingresa el código para acceder",
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
    timer: 5000, // Tiempo en milisegundos antes de que la alerta se cierre automáticamente (en este caso, 5 segundos)
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenido",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("paz.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

//SALUD  MENTAL
function solicitarCodigo18(event) {
  swal({
    title: "Súper descuento",
    text: "Ingresa el código para acceder",
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
    timer: 5000, // Tiempo en milisegundos antes de que la alerta se cierre automáticamente (en este caso, 5 segundos)
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenido !",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace(
            "https://tempssll.github.io/videos-blow-713/saludmental.html"
          );
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

/* SALUD MEDICA */
function solicitarCodigo16(event) {
  swal({
    title: "Súper descuento",
    text: "Ingresa el código para acceder",
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
    timer: 5000, // Tiempo en milisegundos antes de que la alerta se cierre automáticamente (en este caso, 5 segundos)
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenidos!",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace("salud.html");
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}

//Videos codigo
function solicitarCodigo8(event) {
  swal({
    title: "Súper descuento",
    text: "Ingresa el código para acceder.",
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
    timer: 5000, // Tiempo en milisegundos antes de que la alerta se cierre automáticamente (en este caso, 5 segundos)
  }).then((confirm) => {
    if (confirm) {
      var codigoIngresado = document.getElementById("codigo-ingreso").value;
      var codigosPermitidos = ["7131"]; // Array con los códigos permitidos

      // Verifica si el código ingresado está en el array de códigos permitidos
      if (codigosPermitidos.includes(codigoIngresado)) {
        // Si es correcto, redirige al usuario a la página correspondiente
        swal({
          title: "Código correcto",
          text: "¡Bienvenidos !",
          icon: "success",
          timer: 3000, // Tiempo en milisegundos antes de que la alerta de éxito se cierre automáticamente (en este caso, 3 segundos)
        }).then(() => {
          window.location.replace(
            "https://tempssll.github.io/videos-blow-713/"
          );
        });
      } else {
        // Si es incorrecto, muestra un mensaje de error sin botón "OK"
        swal({
          title: "Código incorrecto",
          text: "No tienes acceso a esta página.",
          icon: "error",
          timer: 1000, // Tiempo en milisegundos antes de que la alerta de error se cierre automáticamente (en este caso, 3 segundos)
          buttons: false, // No muestra botones
          closeOnClickOutside: false, // No permite cerrar haciendo clic fuera de la alerta
          closeOnEsc: false, // No permite cerrar pulsando la tecla Esc
        });
        // Reproducir audio de error
        document.getElementById("audio-error").play();
      }
    }
  });
  event.preventDefault(); // Evita que el enlace realice su acción predeterminada
}
