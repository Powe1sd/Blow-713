function solicitarCodigo6(event) {
  event.preventDefault(); // Evita que el enlace se abra automáticamente

  // Muestra el cuadro de diálogo SweetAlert
  swal({
    text: "Introduce el código:",
    content: "input",
    button: {
      text: "Aceptar",
      closeModal: false,
    },
  }).then((value) => {
    if (value === "713") {
      swal("¡Código correcto!", {
        icon: "success",
      }).then(() => {
        // Redirecciona al enlace del libro en una nueva pestaña
        window.open(
          "https://tempssll.github.io/El-enigma-de-luz-7-13/",
          "_blank"
        );
      });
    } else {
      swal("Código incorrecto. Intenta de nuevo.", {
        icon: "error",
      });
    }
  });
}


