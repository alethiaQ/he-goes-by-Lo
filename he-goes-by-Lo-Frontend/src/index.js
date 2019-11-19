
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/los")
        .then(resp => resp.json())
        .then(json => {
            releaseTheLo(json)
        })
    }
)

function releaseTheLo(json) {

    baseStatBar(json)
    gameStatBar();
}

function gameStatBar() {
    let playBtn = document.getElementById("playBtn")
    let timerBtn = document.getElementById("timerBtn")
    playBtn.addEventListener("click", (e) => {
        e.preventDefault
        let timer = new Timer();
        timer.start({ countdown: true, startValues: { seconds: 120 } });
        timerBtn.innerText = timer.getTimeValues().toString();
        timer.addEventListener('secondsUpdated', function (e) {
            timerBtn.innerText = (timer.getTimeValues().toString());
        });
        timer.addEventListener('targetAchieved', function (e) {
            timerBtn.innerText = "Time's up!";
        });

    });
}

