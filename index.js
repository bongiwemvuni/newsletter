const form = document.querySelector('form')
const container = document.querySelector(".container")
const container_2 = document.querySelector(".container_2")
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    container.classList.add("hide")
    container_2.classList.remove("hide")
})
