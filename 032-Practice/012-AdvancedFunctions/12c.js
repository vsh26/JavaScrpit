const finishButton = document.querySelector('#finish-btn');

function finishedFn(){
    setTimeout(()=>{
        finishButton.innerText = 'Finished!'
    }, 1000);
}

finishButton.addEventListener('click', finishedFn);