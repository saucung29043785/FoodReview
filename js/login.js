// btn
let btnLogin = document.querySelector('.btn-login')
let btnRegister = document.querySelector('.btn-register')
// register
let headRegister = document.querySelector('.head-register')
let formRegister = document.querySelector('.form-register')
let textThreeRegister = document.querySelector('.text.three-register')

let backgroundFormRegister = document.querySelector('.form-re') 
// login
let login = document.querySelector('.head-login')
let formLogin = document.querySelector('.form-login')
let textTwo = document.querySelector('.text.two')
let loginMethodForm = document.querySelector('.login-method-form')
let textThreeLogin = document.querySelector('.text.three-login')

let backgroundFormLogin = document.querySelector('.form-lo') 


btnLogin.addEventListener('click', ()=>{
    login.style.transform = "translateX(0)"
    formLogin.style.transform = "translateX(0)"
    textTwo.style.transform = "translateX(0)"
    loginMethodForm.style.transform = "translateX(0)"
    textThreeLogin.style.transform = "translateX(0)"
    backgroundFormLogin.style.zIndex = "1"

    headRegister.style.transform = "translateX(200%)"
    formRegister.style.transform = "translateX(200%)"
    textThreeRegister.style.transform = "translateX(200%)"
    backgroundFormRegister.style.zIndex = "0"
})
btnRegister.addEventListener('click', ()=>{
    headRegister.style.transform = "translateX(0%)"
    formRegister.style.transform = "translateX(0%)"
    textThreeRegister.style.transform = "translateX(0%)"
    backgroundFormLogin.style.zIndex = "0"

    login.style.transform = "translateX(-200%)"
    formLogin.style.transform = "translateX(-200%)"
    textTwo.style.transform = "translateX(-200%)"
    loginMethodForm.style.transform = "translateX(-700%)"
    textThreeLogin.style.transform = "translateX(-200%)"
    backgroundFormRegister.style.zIndex = "1"
})


