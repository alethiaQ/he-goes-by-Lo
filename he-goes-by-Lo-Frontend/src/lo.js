// console.log('lo')
// making adjusting stat bars 

function baseStatBar(data) {
    let healthMeter = document.getElementById("healthMeter")
    let gratMeter = document.getElementById("gratMeter")

    let healthBar = document.createElement("div")
    let gratBar = document.createElement("div") 
   


    let currentHealth = 2
    let currentGrat = 99
    // let currentHealth = data[0].hp 
    // let currentGrat = data[0].gp

    if (currentHealth >= 0 && currentHealth < 25) {
        healthBar.className = "red-health base-bar"
    } else if (currentHealth >= 25 && currentHealth < 50) {
        healthBar.className = "yellow-health base-bar"
    } else {
        healthBar.className = "green-health base-bar"
    }
    healthBar.style.width = currentHealth + "%"
    healthBar.innerText = `${currentHealth}%`
    healthMeter.appendChild(healthBar)

    if (currentGrat >= 0 && currentGrat < 25) {
        gratBar.className = "red-health base-bar"
    } else if (currentGrat >= 25 && currentGrat < 50) {
        gratBar.className = "yellow-health base-bar"
    } else {
        gratBar.className = "green-health base-bar"
    }
    gratBar.style.width = currentGrat + "%"
    gratBar.innerText = `${currentGrat}%`
    gratMeter.appendChild(gratBar)
}

