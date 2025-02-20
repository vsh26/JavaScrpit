function changeBackgroundColorBlack(){
    document.body.style.backgroundColor = 'black';
}

function changeBackgroundColorWhite(){
    document.body.style.background = 'white';
}

// DRY is violated


// Fixing DRY

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}