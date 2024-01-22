function solicitarCodigo() {
  // Pide al usuario que ingrese el código
  var codigoIngresado = prompt("Ingresa el código:");

  // Verifica si el código ingresado es correcto (puedes cambiar "codigoCorrecto" por el código que desees)
  if (codigoIngresado === "2345") {
    // Si es correcto, redirige al usuario a universo.html
    alert("Código correcto. ¡Bienvenido al viaje al Universo!");
    window.location.replace("universo.html");
  } else {
    // Si es incorrecto, redirige al usuario a index.html
    alert("Código incorrecto. Serás redirigido al inicio.");
  }
}
