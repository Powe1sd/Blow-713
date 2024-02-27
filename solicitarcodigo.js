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
      var codigosPermitidos = ["8020w"]; // Array con los códigos permitidos

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
      var codigosPermitidos = ["8020w"]; // Array con los códigos permitidos

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
    text: "Solicita tu código de ingreso para poder tener el curso completo, o escribe al número 3052076713",
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
      var codigosPermitidos = ["8020w"]; // Array con los códigos permitidos

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
      var codigosPermitidos = ["8020w"]; // Array con los códigos permitidos

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
      var codigosPermitidos = ["8020w"]; // Array con los códigos permitidos

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
