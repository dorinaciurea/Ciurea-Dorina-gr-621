function validateForm(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';
  
    if (!email.includes('@') || !email.includes('.')) {
      showError('E-mail invalid');
    }
  
    if (password.length < 8 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      showError('Parolă invalidă - trebuie să aibă minim 8 caractere, o literă mare și un număr');
    }
  
    if (password !== confirmPassword) {
      showError('Parola și confirmarea parolei nu coincid');
    }
  }
  
  function showError(message) {
    const errorMessages = document.getElementById('errorMessages');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessages.appendChild(errorMessage);
  }