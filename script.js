document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Flatpickr en el campo de fecha
    flatpickr("#birthDate", {
        dateFormat: "d-m-Y",
        locale: "es" // Establecer el idioma a español
    });

    // Agregar países al select
    const countrySelect = document.getElementById('country');
    const countries = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "México", "Perú", "Uruguay", "Venezuela"];
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Validar el formulario
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!validateEmail(email)) {
            alert('El correo electrónico debe ser una dirección de Gmail.');
            return;
        }

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un carácter especial.');
            return;
        }

        alert('Registro exitoso!');
    });

    function validateEmail(email) {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return gmailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    }

    // Alternar el estilo de la página
    const toggleStyleIcon = document.getElementById('toggleStyle');
    
    toggleStyleIcon.addEventListener('click', () => {
        document.body.classList.toggle('alternate-style');
    });
});



