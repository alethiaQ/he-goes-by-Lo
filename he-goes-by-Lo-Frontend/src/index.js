
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

    let loPic = json.picture
    let pictag = document.createElement("img")
    pictag.src = loPic

    loContainer.appendChild(pictag)
}