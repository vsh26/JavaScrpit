// Inside an Event Listener (DOM, Browser)

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // the button element
});

// Here, 'this' refers to the element that received the event