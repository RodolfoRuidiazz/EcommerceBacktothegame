document.addEventListener("DOMContentLoaded", () => {
  const userIcon = document.getElementById("userIcon");
  const userLink = document.getElementById("userLink");

  const usuarioEmail = localStorage.getItem("usuarioEmail");

  if (usuarioEmail) {
    // Usuario logueado → mostrar cerrar sesión
    userIcon.classList.remove("bi-person");
    userIcon.classList.add("bi-box-arrow-right");
    userIcon.title = "Cerrar sesión";

    userLink.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.clear();
      window.location.href = "/Pages/Login.html";
    });

  } else {
    // Usuario NO logueado → ir a login
    userLink.href = "/Pages/Login.html";
  }
});

