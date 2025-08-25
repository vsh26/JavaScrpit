const addToCartButton = document.querySelector('#add-btn');
const displayText = document.querySelector('#display-text');

let timeoutID;
function clearText(){
    
    clearTimeout(timeoutID);

    timeoutID = setTimeout(()=>{
        displayText.innerText = '';
    }, 2000);
}

addToCartButton.addEventListener('click', () => {
    displayText.innerText = 'Added';
    clearText();
});