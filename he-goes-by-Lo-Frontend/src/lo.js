// console.log('lo')
// making adjusting stat bars 

function baseStatBar(data) {
    let healthMeter = document.getElementById("healthMeter")
    let gratMeter = document.getElementById("gratMeter")
    

    let healthBar = document.createElement("div")
    healthBar.className = "bar base-bar"
    let gratBar = document.createElement("div")
    gratBar.className = "bar base-bar"
   


    let currentHealth = 2
    let currentGrat = 99
    // let currentHealth = data[0].hp 
    // let currentGrat = data[0].gp

    if (currentHealth >= 0 && currentHealth < 25) {
        healthMeter.className = "ui large red progress"
    } else if (currentHealth >= 25 && currentHealth < 50) {
        healthMeter.className = "ui large yellow progress"
    } else {
        healthMeter.className = "ui large green progress"
    }
    healthBar.style.width = currentHealth + "%"
    healthBar.innerText = `${currentHealth}%`
    healthMeter.appendChild(healthBar)

    if (currentGrat >= 0 && currentGrat < 25) {
       gratMeter.className = "ui large red progress"
    } else if (currentGrat >= 25 && currentGrat < 50) {
        gratMeter.className = "ui large yellow progress"
    } else {
        gratMeter.className = "ui large green progress"
    }
    gratBar.style.width = currentGrat + "%"
    gratBar.innerText = `${currentGrat}%`
    gratMeter.appendChild(gratBar)
}

