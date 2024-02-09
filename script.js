// Verificar se o usuário já tem uma preferência de tema salva no localStorage
if (localStorage.getItem("darkMode") === "true") {
  enableDarkMode();
}

// Adicionar um evento de clique ao botão
document
  .getElementById("darkModeButton")
  .addEventListener("click", toggleDarkMode);

// Função para ativar ou desativar o modo escuro
function toggleDarkMode() {
  if (localStorage.getItem("darkMode") === "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Função para ativar o modo escuro
function enableDarkMode() {
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
  localStorage.setItem("darkMode", "true");
}

// Função para desativar o modo escuro
function disableDarkMode() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#333";
  localStorage.setItem("darkMode", "false");
}
