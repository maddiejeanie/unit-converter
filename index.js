const convertmtof = 3.281
const convertltog = 0.264 
const convertptok = 2.204 

const convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){

meterstofeet.innerHTML = `${ inputEl.value } metres = ${ (inputEl.value * convertmtof).toFixed(3)  } feet <br> ${ inputEl.value } feet = ${ (inputEl.value / convertmtof).toFixed(3) } metres`

literstogallons.innerHTML = `${ inputEl.value } liters = ${(inputEl.value * convertltog).toFixed(3) } gallons <br> ${ inputEl.value } gallons = ${ (inputEl.value / convertltog).toFixed(3) } liters`

kilostopounds.innerHTML = `${ inputEl.value } kilograms = ${ (inputEl.value * convertptok).toFixed(3) } pounds <br> ${ inputEl.value } pounds = ${ (inputEl.value / convertptok).toFixed(3) } kilograms`
}

)

