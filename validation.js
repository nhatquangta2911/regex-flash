// var regEx = /[a-z0-9]{2,}/gi
// var regEx2 = new RegExp(regEx,'i')
 
const inputs = document.querySelectorAll('input')

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^[a-z\d-\.]{8,}@[a-z\d-]{3,}\.[a-z]{2,}(\.[a-z]{2,})*$/i
}

function validate(field, regex) {
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid'
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        validate(event.target, patterns[event.target.attributes.name.value])
    })
})
