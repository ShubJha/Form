const submit = document.querySelector('#button')
const subtitle = document.querySelector('#subtitle')
const inputs = document.querySelectorAll('input')

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    inputs.forEach(input => input.value)
    if (checkPassword()) {
        subtitle.innerText = 'Submit Confirmed'
    }
    else {
        subtitle.innerText = "The passwords don't match"
    }
})

const checkPassword = () => inputs[4].value == inputs[5].value