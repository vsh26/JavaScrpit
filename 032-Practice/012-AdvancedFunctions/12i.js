const addButton = document.querySelector('#add-btn');
const removeButton = document.querySelector('#remove-btn');

let messageNum = 0;

function updateTitle(){

    if((document.title === 'Document') && (messageNum > 0)){
        document.title = `(${messageNum}) New Message`
    } else {
        document.title = 'Document';
    }

}

setInterval(updateTitle, 1000);

function increaseNum(){
    messageNum++;
}

function decreaseNum(){
    messageNum--;
    if(messageNum < 0){
        messageNum = 0;
    }
}

addButton.addEventListener('click', increaseNum);
removeButton.addEventListener('click', decreaseNum);