const addToCartButton = document.querySelector('#add-btn');
const displayText = document.querySelector('#display-text');

function clearText(){
    setTimeout(()=>{
        displayText.innerText = '';
    }, 2000);
}

addToCartButton.addEventListener('click', () => {
    displayText.innerText = 'Added';
    clearText();
});