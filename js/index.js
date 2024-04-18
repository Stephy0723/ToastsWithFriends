const users = [];

const registrationForm = document.getElementById('registrationForm');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  users.push({ firstName, lastName, email, password });

  registrationForm.style.display = 'none';
  loginForm.style.display = 'block';
});

const loginForm = document.getElementById('loginForm');
const login = document.getElementById('login');

login.addEventListener('submit', function(event) {
  event.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const user = users.find(user => user.email === loginEmail && user.password === loginPassword);

  if (user) {
    alert('Inicio de sesión exitoso!');
  } else {
    alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
  }
});
