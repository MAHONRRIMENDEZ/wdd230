// check password 


const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm_password");
const fb= document.querySelector("#feedback");

password2.addEventListener('focusout',controlar)

function controlar() {
    //console.log('inside the function')
    if (password1.value !== password2.value) {
        //console.log('values do not match')
        password1.value=""
        password2.value=""
        password1.focus()
        fb.textContent = "Password values do not match"

    } else {
        //console.log('match good')
        fb.textContent=""
    }
}


// email check
const email = document.querySelector("#email");
const em = document.querySelector("#emailwrong");

email.addEventListener('focusout',controlar)

function controlar() {
    if (!email.value.endsWith("@byui.edu")) {
        email.value=""
        email.focus()
        em.textContent = "Please enter a valid email address ending with @byui.edu"
    } else {
        em.textContent=""
    }
}

function updateRating(value) {
    document.getElementById("rating_display").textContent = value;
}


