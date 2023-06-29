const button = document.querySelector(".sort-advice")
const adviceNum = document.getElementById("advice-id")
const adviceText = document.querySelector(".advice-text")
const url = "https://api.adviceslip.com/advice"

async function getAdvice(){
    const response = await fetch(url)
    const { slip: {id, advice}} = await response.json()
    adviceNum.innerText = id
    adviceText.innerText = advice
}

getAdvice()

button.addEventListener('click', getAdvice)