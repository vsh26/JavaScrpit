const startButton = document.querySelector('#start-button');
const timeInput = document.querySelector('#input-box');
const countdownDisplay = document.querySelector('#countdown-display')

function startTimer(){
    
    let timeInputValue = parseInt(timeInput.value);

    console.log(timeInputValue);
    // console.log(typeof timeInputValue);
    
    if(isNaN(timeInputValue)){
        countdownDisplay.innerText = 'Please enter a valid number';
        return;
    }

    if(timeInputValue <= 0){
        countdownDisplay.innerText = 'Please enter seconds > 0';
        return;
    }

    const timer = setInterval(() => {
        timeInputValue--;
        countdownDisplay.innerText = `Time remaining: ${timeInputValue}`;

        if(timeInputValue === 0){
            clearInterval(timer);
            countdownDisplay.innerText = 'Time up!';
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);