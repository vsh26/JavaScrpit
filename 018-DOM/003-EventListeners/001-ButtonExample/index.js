function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

// referencing dark-button
const darkButton = document.getElementById("dark-button");

// Check in browser console, of we targeted the correct button
console.log(darkButton);

// Adding event listener to button
// params -> event, listener function
// whenever the event occurs, listener function is executed
darkButton.addEventListener('click', function(){
    console.log('I got clicked');
    changeBackgroundColor('black');
});

// can we perform another function on same button? -> YES

darkButton.addEventListener('click', function(){
    console.log('Another function');
});


// referencing theme-button
const themeButton = document.getElementById("theme-button");
console.log(themeButton);

themeButton.addEventListener('click', function(){
    console.log(document.body.style.backgroundColor);

    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor == "white"){
        changeBackgroundColor("black");
        themeButton.innerText = "Light Mode";   // Overwriting the button label
    }else{
        changeBackgroundColor("white");
        themeButton.innerText = "Dark Mode";    // Overwriting the button label
    }
});