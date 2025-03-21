const quotes = [
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Opportunities don\'t happen. You create them. — Chris Grosser",
    "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
    "The best way to predict the future is to create it. — Peter Drucker",
    "Act as if what you do makes a difference. It does. — William James",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    "Dream big and dare to fail. — Norman Vaughan",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Your time is limited, so don\'t waste it living someone else\'s life. — Steve Jobs",
    "Courage is resistance to fear, mastery of fear, not absence of fear. — Mark Twain",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "Happiness depends upon ourselves. — Aristotle",
    "Doubt kills more dreams than failure ever will. — Suzy Kassem",
    "Difficulties in life are intended to make us better, not bitter. — Dan Reeves",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Everything you\'ve ever wanted is on the other side of fear. — George Addair",
    "Change your thoughts and you change your world. — Norman Vincent Peale",
    "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats",
    "The harder the conflict, the greater the triumph. — George Washington"
  ];

const quoteDisplay = document.querySelector("#display-quote");
const generateButton = document.querySelector("#generate-btn");

function generateRandomQuote(){
    
    const randomNum = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomNum];
    quoteDisplay.innerText = quote;

}

generateButton.addEventListener('click', generateRandomQuote);
