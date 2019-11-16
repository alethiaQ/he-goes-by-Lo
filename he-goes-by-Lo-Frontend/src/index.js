
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/los")
        .then(resp => resp.json())
        .then(json => {
            releaseTheLo(json)
        })
    }
)

function releaseTheLo(json) {
    let loContainer = document.getElementById("Los house")

    let loPic = json[0].picture
    let pictag = document.createElement("img")
    pictag.src = loPic
    pictag.classList = "lo-img"

    loContainer.appendChild(pictag)

    baseStatBar(json)
}