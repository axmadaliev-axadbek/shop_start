var formInput = document.getElementById('form__input')
var formBtn = document.getElementById('form__btn')
var isNotValid = document.querySelector('.valid')

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

formBtn.addEventListener('click', (event) => {
    event.preventDefault
    if(validateEmail(formInput.value)){
        isNotValid.classList.remove('notvalid')
    }else{
        isNotValid.classList.add('notvalid')
    }
})