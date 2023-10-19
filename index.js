const elements = document.querySelectorAll(".links");

elements.forEach(function (element) {
element.addEventListener("click", function (){
    element.style.backgroundColor = "rgb(100, 237, 180)";
});
});