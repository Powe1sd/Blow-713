// Array que contendrá los usuarios
let Users = [];

// Agregar usuarios
Users.push({
  name: "Brayan",
  email: "brayan324554@gmail.com",
  password: "con1122",
});
Users.push({
  name: "Usuario2",
  email: "usuario2@example.com",
  password: "contraseña456",
});
Users.push({
  name: "Usuario3",
  email: "usuario3@example.com",
  password: "contraseña789",
});

// Guardar en el localStorage
localStorage.setItem("users", JSON.stringify(Users));

// Función para el formulario de inicio de sesión
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obtener los valores del formulario
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Obtener la lista de usuarios del localStorage
  const Users = JSON.parse(localStorage.getItem("users")) || [];

  // Verificar si el usuario y la contraseña son válidos
  const validUser = Users.find(
    (user) => user.email === email && user.password === password
  );

  // Si no se encuentra un usuario válido, mostrar un mensaje de error
  if (!validUser) {
    return alert("Usuario y/o contraseña incorrectos!");
  }

  // Si el usuario es válido, mostrar un mensaje de bienvenida
  alert(`Bienvenido ${validUser.name}`);

  // Almacenar los datos del usuario en el localStorage para indicar que ha iniciado sesión
  localStorage.setItem("login_success", JSON.stringify(validUser));

  // Redireccionar al usuario a la página principal
  window.location.href = "https://tempssll.github.io/videos-blow-713/";
});

function irA(pagina) {
  window.location.href = pagina;
}
