function updateTitle(){
    if(document.title === 'Document'){
        document.title = '(2) New Messages';
    } else {
        document.title = 'Document';
    }
}

setInterval(updateTitle, 1000);