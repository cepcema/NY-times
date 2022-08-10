const feedDisplay = document.querySelector(`#feed`)

const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=7jwnRSBpbCTs4Nq50AO3Anq7hGPG8uvW`

fetch(url)
.then(response => response.json())
.then(data => data.results.forEach(article => {
    const title =  `<h3>---- ${article.title} -----</h3>`
    feedDisplay.insertAdjacentHTML(`beforeend`, title)
} ))
// .then(data => data.forEach(article => {
//     const title =  `<h3>---- ${article.title} -----</h3>`
//     feedDisplay.insertAdjacentHTML(`beforeend`, title)
// }));