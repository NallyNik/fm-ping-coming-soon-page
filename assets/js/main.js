const btn = document.getElementById('submit');
const input = document.getElementById('email');

btn.addEventListener('click', () => {
    if (!input.value) {
            input.setCustomValidity("Whoops! It looks like you forgot to add your email");
    }
})