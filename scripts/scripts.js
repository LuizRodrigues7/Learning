let usdInput = document.querySelector("#US$");
let brlInput = document.querySelector("#BRL$");
let img = document.querySelector("#img");

usdInput.addEventListener("keyup", function() {

})

brlInput.addEventListener("keyup", function() {

})

img.addEventListener("mouseover", function() {
    img.style.transform = "scale(1.2)";
    img.style.transition = "transform 0.5s ease";
})

img.addEventListener("mouseout", function() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.5s ease";
})