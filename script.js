let button = document.querySelector('button.addBanana');
let bananaCounter = document.querySelector('span.bananaCount');
let bananaCount = 0;
let bananaCountString = `São ${bananaCount} Bananas.`;

button.addEventListener('click', () => { 
    addBanana()
})

let addBanana = function () {
    bananaCount++
    bananaCountString = `São ${bananaCount} Bananas.`
    bananaCounter.innerHTML = bananaCountString
}