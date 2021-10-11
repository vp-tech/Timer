const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')

const newYears = '1 Jan 2022'

function countdown(){
    const newYearDate = new Date(newYears)
    const currentDate = new Date()
    const totalseconds = (newYearDate - currentDate) / 1000

    const days = Math.floor(totalseconds / 3600 / 24)
    const hours = Math.floor(totalseconds/3600) %24
    const minutes = Math.floor(totalseconds/60) % 60
    const seconds = Math.floor(totalseconds%60)

    daysElem.innerHTML = days 
    hoursElem.innerHTML = formatTime(hours) 
    minutesElem.innerHTML = formatTime(minutes) 
    secondsElem.innerHTML = formatTime(seconds) 
}

function formatTime(time){
    return time <10 ? (`0${time}`) : time
}

//initial
countdown()
setInterval(countdown,1000)