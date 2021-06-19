// crea las constantes necesarias
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// Evita que el formulario se envíe cuando se presiona un botón
form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

// ejecuta la función cuando se hace clic en el botón 'Saludar'
submitBtn.addEventListener('click', function() {
    // guarda el nombre ingresado en el almacenamiento web
    localStorage.setItem('name', nameInput.value);
    // ejecuta nameDisplayCheck() para ordenar la visualización del
    // saludo personalizado y actualización de la visualización del formulario
    nameDisplayCheck();
  });

// ejecuta la función cuando se hace clic en el botón 'Olvidar'
forgetBtn.addEventListener('click', function() {
    // Elimina el nombre guardado del almacenamiento web
    localStorage.removeItem('name');
    // ejecuta nameDisplayCheck() para ordenar la visualización del
    // saludo genérico nuevamente y actualiza la visualización del formulario
    nameDisplayCheck();
  });

// definir la función nameDisplayCheck()
function nameDisplayCheck() {
    // verifica si el elemento de datos 'name' está guardado en el almacenamiento web
    if(localStorage.getItem('name')) {
      // Si es así, muestra un saludo personalizado
      let name = localStorage.getItem('name');
      h1.textContent = 'Bienvenido, ' + name;
      personalGreeting.textContent = '¡Bienvenido a nuestro sitio web, ' + name + '! Esperamos que te diviertas mientras estés aquí.';
      // ocultar la parte 'recordar' del formulario y mostrar la parte 'olvidar'
      forgetDiv.style.display = 'block';
      rememberDiv.style.display = 'none';
    } else {
      // si no, muestra un saludo genérico
      h1.textContent = 'Bienvenido a nuestro sitio web ';
      personalGreeting.textContent = 'Bienvenido a nuestro sitio web. Esperamos que se diviertas mientras estés aquí.';
      // ocultar la parte 'olvidar' del formulario y mostrar la parte 'recordar'
      forgetDiv.style.display = 'none';
      rememberDiv.style.display = 'block';
    }
  }

  document.body.onload = nameDisplayCheck;
