
let button = document.getElementById("button")
let btnText = document.getElementById("btnText")
let btnIcon = document.getElementById("btnIcon")

//function for button to change color
button.addEventListener('click', function (e) {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
        //changeing background color and icon to light and sun
        btnIcon.src = "image/sun.png";
        btnText.innerHTML = "Light";
    }else{
        //changeing background color and icon to dark and moon 
        btnIcon.src = "image/moon.png";
        btnText.innerHTML = "Dark";
    }
}) 






//Looking for console.log() o7