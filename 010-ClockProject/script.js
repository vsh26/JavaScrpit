function updateClock(){

    const timeElement = document.getElementById("time-container");
    const dateElement = document.getElementById("date-container");

    const now = new Date();
    // console.log(now);

    const hours = (now.getHours() % 12 || 12);
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    const ampm = (now.getHours() >= 12 ? "PM" : "AM");

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();