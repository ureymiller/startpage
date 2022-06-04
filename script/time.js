function updateTime() {
    const date = new Date();
    const hour = to2digits(date.getHours());
    const minutes = to2digits(date.getMinutes());
    const day = to2digits(date.getDate());
    const month = to2digits(date.getMonth() + 1);
    const year = date.getFullYear().toString();
    
    const fullTime = `${hour}:${minutes}`;
    const fullDate = `${day}/${month}/${year.slice(2, 4)}`;
    
    $("#hero-time-clock").text(fullTime);
    $("#hero-time-date").text(fullDate);
}

updateTime();
setInterval(updateTime, 10000);

function to2digits(number) {
    return number < 10 ? "0" + number : number;
}