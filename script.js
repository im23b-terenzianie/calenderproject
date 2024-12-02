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
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
function previousmonth(){
    let current = document.getElementById("currentmonth")
    let month = current.innerHTML
    let index = months.indexOf(month)
    if (index === 0){
        current.innerHTML = months[11]
    }
    else{
        current.innerHTML = months[index-1]
    }
}
function nextmonth(){
    let current = document.getElementById("currentmonth")
    let month = current.innerHTML
    let index = months.indexOf(month)
    if (index === 11){
        current.innerHTML = months[0]
    }
    else{
        current.innerHTML = months[index+1]
    }
}