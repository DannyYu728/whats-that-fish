const home = document.querySelector(".homeButton")
const docBtn = document.querySelector(".docButton")
const title = document.querySelector(".title")
const documents = document.querySelector(".documents")

home.addEventListener('click', () => {
  title.classList.remove("hidden")
  documents.classList.add("hidden")
})

docBtn.addEventListener('click', () => {
  title.classList.add("hidden")
  documents.classList.remove("hidden")
})