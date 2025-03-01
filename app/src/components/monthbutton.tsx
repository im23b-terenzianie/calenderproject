'use client'
 import {useEffect} from "react";

 export default function Monthbutton() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function previousmonth() {
        let current = document.getElementById("currentmonth")
        if (current) {
            let month = current.innerHTML
            let index = months.indexOf(month)
            current.innerHTML = index === 0 ? months[11] : months[index - 1]
        }
    }

    function nextmonth() {
        let current = document.getElementById("currentmonth")
        if (current) {
            let month = current.innerHTML
            let index = months.indexOf(month)
            current.innerHTML = index === 11 ? months[0] : months[index + 1]
        }
    }

    function startday() {
        const currentMonthElement = document.getElementById("currentmonth")
        if (currentMonthElement) {
            const year = new Date().getFullYear();
            const month = months.indexOf(currentMonthElement.innerHTML);
            const firstday = new Date(year, month, 1).getDay();
            return firstday === 0 ? 7 : firstday;
        }
        return 0;
    }

    function daysinmonth() {
        const currentMonthElement = document.getElementById("currentmonth")
        if (currentMonthElement) {
            const index = months.indexOf(currentMonthElement.innerHTML) + 1;
            if (index === 4 || index === 6 || index === 9 || index === 11) {
                return 30;
            } else if (index === 2) {
                return 28;
            } else {
                return 31;
            }
        }
        return 0;
    }

     function createcalender() {
         const weekday = startday();
         const monthdays = daysinmonth();
         let i = 1;
         while (i <= 42) {
             let cell = document.getElementById("cell" + i);
             if (cell) {
                 if (i < weekday || i > monthdays + weekday - 1) {
                     cell.querySelector(".date")!.innerHTML = "";
                 } else {
                     cell.querySelector(".date")!.innerHTML = (i - weekday + 1).toString();
                 }
             }
             i++;
         }
     }

    useEffect(() => {
        createcalender();
    }, []);
    return (
        <div>
            <div className="flex justify-center items-center" >
                <button onClick={() => {
                    previousmonth();
                    createcalender();
                }}>
                    &lt;
                </button>
                <div className="my-1 mx-3 border-2 p-1 text-center" id="currentmonth">
                    January
                </div>
                <button onClick={() => {
                    nextmonth();
                    createcalender();
                }}>
                    &gt;
                </button>
            </div>
        </div>
    );
}
