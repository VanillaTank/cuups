var btn = document.querySelectorAll('.btn');

for(i = 0; i < btn.length; i++) {
    var buttons = btn[i];
    buttons.addEventListener('click', operatioN);
    
}
function operatioN (eventObject) {
    var clickedElement = eventObject.currentTarget;
    if(clickedElement.className !== "true") {
        clickedElement.classList.toggle("true");
    }
}

