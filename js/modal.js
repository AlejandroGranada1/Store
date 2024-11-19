document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const newUserButton = document.getElementById("newUserButton");
    const closeModal = document.getElementById("closeModal");

    // Abrir modal al hacer clic en el botón
    newUserButton.addEventListener("click", function () {
        modal.style.display = "flex";
        modal.style.visibility="visible"
    });

    // Cerrar modal al hacer clic en la 'X'
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar modal si se hace clic fuera del contenido
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    guardar.addEventListener("click", function() {
        modal.style.display = "none";
    })
});

const registromod = () => {
    const formu = {
        documento: document.getElementById("doc").value,
        nombre: document.getElementById("name").value,
        edad: document.getElementById("age").value,
        imagen: document.getElementById("photoInput").value,
        ciudad: document.getElementById("city").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("phone").value,
        fecha: document.getElementById("startDate").value,
    }
    localStorage.setItem(formu.documento, JSON.stringify(formu))
}