document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
  
    toggleSwitch.addEventListener("change", function () {
      if (toggleSwitch.checked) {
        document.body.classList.add("dark-mode");
        document.getElementById("modeText").innerText = "Modo Oscuro";
      } else {
        document.body.classList.remove("dark-mode");
        document.getElementById("modeText").innerText = "Modo Blanco";
      }
    });
  });
  