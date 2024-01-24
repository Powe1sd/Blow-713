function solicitarCodigo(event) {
  // Pide al usuario que ingrese el código
  var codigoIngresado = prompt("Ingresa el código:");

  // Verifica si el código ingresado es correcto (puedes cambiar "codigoCorrecto" por el código que desees)
  if (codigoIngresado === "713") {
    // Si es correcto, redirige al usuario a universo.html
    alert("Código correcto. ¡Bienvenido al viaje al Universo!");

    // Puedes descomentar la siguiente línea si deseas permitir que el enlace funcione después de ingresar el código correcto
    // window.location.replace("universo.html");
  } else {
    // Si es incorrecto, muestra un mensaje de error y evita la acción predeterminada del enlace
    alert("Código incorrecto. No tienes acceso a esta página.");
    event.preventDefault(); // Evita que el enlace realice su acción predeterminada
  }
}
