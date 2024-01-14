window.addEventListener("load", function () {
  var progressBar = document.querySelector("progress");

  function updateProgressBar() {
    var scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrollTop = document.documentElement.scrollTop;
    var progress = (scrollTop / scrollHeight) * 100;

    progressBar.value = progress;
    document.title = "% de Lectura: " + Math.round(progress) + "%"; // Muestra el porcentaje en el título de la página
  }

  window.addEventListener("scroll", updateProgressBar);

  // Actualizar la barra de progreso al hacer clic en el enlace "Seguir"
  var seguirLink = document.querySelector(
    ".button-container a[href='doscaras.html']"
  );

  setTimeout(function () {
    updateProgressBar();
  }, 500); // Esperar 500ms antes de actualizar la barra de progreso
});
