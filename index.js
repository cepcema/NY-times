const feedDisplay = document.querySelector(`#feed`)

const url = `https://ny-times-api.herokuapp.com/`

fetch(url)
.then(response => response.json())
.then(data => data.forEach(article => {
    const title =  `<h3>---- ${article.title} -----</h3>`
    feedDisplay.insertAdjacentHTML(`beforeend`, title)
}));