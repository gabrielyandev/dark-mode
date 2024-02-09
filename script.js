const modoDark = document.getElementById("modoDark");
const body = document.body;

function modoDarkToggle() {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modoDark.innerText = "Modo claro";
  } else {
    modoDark.innerText = "Modo escuro";
  }

  localStorage.setItem("modoDark", body.classList.contains("dark"));
}
