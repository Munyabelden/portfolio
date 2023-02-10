"use strict";
const form = document.querySelector('.mobile-form');

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

  function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
        e.code === 22
              || e.code === 1014
              || e.name === 'QuotaExceededError'
              || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
              && (storage && storage.length !== 0);
    }
  }

  if (storageAvailable('localStorage')) {

    const updateFormData = () => {

      const formInput = {

        name: form.name.value,
        email: form.email.value,
        message: form.message.value,

      };
  
      localStorage.setItem('formInput', JSON.stringify(formInput));
    };

    form.name.addEventListener('change', updateFormData);
    form.email.addEventListener('change', updateFormData);
    form.message.addEventListener('change', updateFormData);
  
    const checkData = () => {

      let name = '';
      let email = '';
      let message = '';
  
      if (JSON.parse(localStorage.getItem('formInput')) === null) {

        name = '';
        email = '';
        message = '';

      } else {

        ({ name, email, message } = JSON.parse(localStorage.getItem('formInput')));

      }
  
      if (name !== 'empty' || email !== 'empty' || message !== 'empty') {

        form.name.value = name;
        form.email.value = email;
        form.message.value = message;

      }
    };
  
    document.addEventListener('DOMContentLoaded', () => {
      checkData();
    });
  }
