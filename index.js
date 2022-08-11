const feedDisplay = document.querySelector(`.row`)
console.log(feedDisplay)
const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=7jwnRSBpbCTs4Nq50AO3Anq7hGPG8uvW`

fetch(url)
.then(response => response.json())
.then(data => data.results.forEach(article => {
    const title =  `<div class="col-md-6">
    <div class="tn-img">
        <img src="${article.media[0][`media-metadata`][2].url}" />
        <div class="tn-content">
            <div class="tn-content-inner">
                <a class="tn-date" href=""><i class="far fa-clock"></i>${article.updated}</a>
                <a class="tn-title" href="">${article.title}</a>
            </div>
        </div>
    </div>
</div>`
//console.log(article.media[0][`media-metadata`][2].url)
console.log(article)
    feedDisplay.insertAdjacentHTML(`beforeend`, title)
} ))
// .then(data => data.forEach(article => {
//     const title =  `<h3>---- ${article.title} -----</h3>`
//     feedDisplay.insertAdjacentHTML(`beforeend`, title)
// }));