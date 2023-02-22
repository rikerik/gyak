// témák amik alapján random bedob oldalak majd animációval megpördülnek a kártyák és a javascript random ajánl oldalakat 


const card = document.getElementById("divContainer");

card.addEventListener("click",flipCard);

function flipCard(){
    divContainer.classList.toggle("flipCard")
}