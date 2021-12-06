let date = new Date ()

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const month = document.querySelector('.month')

const months = ["January","February","March","April","May",
"June","July","August","September","October","November","December"]

hours.textContent = date.getHours()
minutes.textContent = date.getMinutes()
month.textContent = `${date.getDate()} ${months[date.getMonth()]}`
let seconds = date.getSeconds()
console.log(seconds);

function timer () {
    setInterval(() => {
        date = new Date ()
        seconds = date.getSeconds()
        if (seconds === 1) {
            hours.textContent = date.getHours()
            minutes.textContent = date.getMinutes()
            month.textContent = `${date.getDate()} ${months[date.getMonth()]}`
        }
    },1000)
}

timer()
