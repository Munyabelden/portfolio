const formSubmit = (input) => {
    if (input === input.toLowerCase()) return true;
    return false;
  }

form.addEventListener('submit', (event) => {
    const email = document.getElementById('email');
    if (!formSubmit(email.value)) {
      event.preventDefault();
      const errorMessage = document.querySelector('.error-message');
      const email = document.querySelector('#email');
      errorMessage.classList.add('error');
      email.classList.add('error');
    }
  });