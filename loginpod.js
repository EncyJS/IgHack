const userInputs = document.querySelectorAll('input');
const submitButton = document.getElementById('login-btn');

const submitFormHandler = (event) => {
    event.preventDefault()
    console.log('submitted');
    const username = userInputs[0].value;
    const password = userInputs[1].value;
    console.log(username, password);
} 

submitButton.addEventListener('click', submitFormHandler);