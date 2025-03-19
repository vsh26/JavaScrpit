function updateClock(){

    const timeElement = document.querySelector("#time-container");
    const dateElement = document.querySelector("#date-container");

    const now = new Date();

    const hours = (now.getHours() % 12 || 12);
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const ampm = (now.getHours() >= 12 ? "PM" : "AM");

    timeElement.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.innerText = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();