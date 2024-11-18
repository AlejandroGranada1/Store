document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");  

    loginBtn.addEventListener("click", () => {
        loginBtn.classList.add("active");
        registerBtn.classList.remove("active");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
    });

    registerBtn.addEventListener("click", () => {
        registerBtn.classList.add("active");
        loginBtn.classList.remove("active");
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
    });
});

const registrar = () => {
    const user ={
        nombre: document.getElementById ("nombre").value,
        correo: document.getElementById ("correo").value,
        contrasena: document.getElementById ("contrasena").value,           
    }
    localStorage.setItem('user', JSON.stringify(user))
}
