function subscribe(){

    const subscribeButton = document.querySelector('.js-subscribe-btn');

    if(subscribeButton.classList.contains('is-subscribed')){
        subscribeButton.innerText = 'Subscribe';
        subscribeButton.classList.remove('is-subscribed');
    }else{
        subscribeButton.innerText = 'Subscribed';
        subscribeButton.classList.add('is-subscribed');
    }
}