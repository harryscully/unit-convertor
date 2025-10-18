const lenEl = document.querySelector("#len-text")
const volEl = document.querySelector("#vol-text")
const massEl = document.querySelector("#mass-text")

const convertBtn = document.querySelector("#convert-btn")

const inputEl = document.querySelector("#number-input")

convertBtn.addEventListener("click", () => {
    let inputVal = Number(inputEl.value)
    lenEl.textContent = `${inputVal} meters = ${(3.281 * inputVal).toFixed(3)} feet | ${inputVal} feet = ${(0.304 * inputVal).toFixed(3)} metres`

    volEl.textContent = `${inputVal} litres = ${(0.264 * inputVal).toFixed(3)} gallons | ${inputVal} gallons = ${(3.785 * inputVal).toFixed(3)} litres`

    massEl.textContent = `${inputVal} kilograms = ${(2.204 * inputVal).toFixed(3)} pounds | ${inputVal} pounds = ${(0.454 * inputVal).toFixed(3)} kilograms`
})