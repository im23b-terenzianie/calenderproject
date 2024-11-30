function passwordvalidation(){
    let pw = document.getElementById("password")
    let rpw = document.getElementById("repeatpassword")
    if (pw === rpw){
        password.classList.remove("border-yellow-300")
        repeatpassword.classList.remove("border-yellow-300")
        password.classList.add("border-green-300")
        repeatpassword.classList.add("border-green-300")

    }
    else{
        password.classList.remove("border-yellow-300")
        repeatpassword.classList.remove("border-yellow-300")
        password.classList.add("border-yellow-300")
        repeatpassword.classList.add("border-yellow-300")
    }
}