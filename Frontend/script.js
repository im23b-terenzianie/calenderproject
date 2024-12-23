function passwordvalidation(){
    let pw = document.getElementById("password")
    let rpw = document.getElementById("repeatpassword")
    if (pw.value === rpw.value){
        pw.classList.remove("border-yellow-300")
        rpw.classList.remove("border-yellow-300")
        pw.classList.remove("border-red-300")
        rpw.classList.remove("border-red-300")
        pw.classList.add("border-green-300")
        rpw.classList.add("border-green-300")

    }
    else{
        pw.classList.remove("border-yellow-300")
        rpw.classList.remove("border-yellow-300")
        pw.classList.remove("border-green-300")
        rpw.classList.remove("border-green-300")
        pw.classList.add("border-red-300")
        rpw.classList.add("border-red-300")
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
function startday(){
    const year=  new Date().getFullYear();
    const month = months.indexOf(document.getElementById("currentmonth").innerHTML);
    const firstday = new Date(year, month, 1).getDay();
    const weekday = firstday === 0 ? 7 : firstday;
    return weekday;
}
function daysinmonth(){
    const index = months.indexOf(document.getElementById("currentmonth").innerHTML) + 1;
    if (index === 4 || index === 6 || index === 9 || index === 11){
        const monthdays = 30
        return monthdays
    } else if (index === 2){
        const monthdays = 28
        return monthdays
    } else{
        const monthdays = 31
        return monthdays
    }
}

function createcalender(){
    const weekday = startday();
    const monthdays = daysinmonth();
    let i = 1
    while (i <= 42) {
        let cell = document.getElementById("cell" + i)
        if (i < weekday || i > monthdays + weekday - 1){
            cell.innerHTML = ""
        }
        else{
            cell.innerHTML = i - weekday + 1
        }
        i++;
    }
}

function opennote() {

}