document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const errorTextEmail = emailInput.nextElementSibling;
  const errorTextPassword = passwordInput.nextElementSibling;

  form.addEventListener('submit', function (event) {
      let inputValid = true;

      if (emailInput.value.trim() === '') {
          errorTextEmail.textContent = 'El campo de email es obligatorio.';
          inputValid = false;
      } else {
          errorTextEmail.textContent = '';
      }

      if (passwordInput.value.trim() === '') {
          errorTextPassword.textContent = 'El campo de contraseña es obligatorio.';
          inputValid = false;
      } else {
          errorTextPassword.textContent = '';
      }

      if (!inputValid) {
          event.preventDefault();
      }
  });
});


