document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const passwordInput = document.getElementById("password");
    const error = document.getElementById("login-error");
    const validPassword = "password";
  
    if (passwordInput.value === validPassword) {
      window.location.href = "./dashboard.html";
    } else {
      error.style.display = "block";
      passwordInput.value = "";
    }
  });