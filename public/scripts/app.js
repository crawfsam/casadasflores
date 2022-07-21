const form = document.getElementById('form')
const username = document.getElementById('name')
const email = document.getElementById('email')

function checkInputs() {
    const emailValue = email.value.trim();
    const nameValue = username.value.trim();

    if(nameValue === '') {
        const formControl = username.parentElement
        formControl.classList.add('.error')
    } 

    if(emailValue === '') {
        const formControl = email.parentElement
        formControl.classList.add('.error')
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

