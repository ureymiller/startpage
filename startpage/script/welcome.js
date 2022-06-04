const names = [
    "Master",
    "Commander",
    "Sir",
    "YourName",
    "Professor",
    "Shinobi"
]

const quotes = [
    '"All things are difficult before they are easy."',
    '"The best view comes after the hardest climb."',
    '"Don\'t follow your dreams, chase them!"',
    '"With love and patience, nothing is impossible."',
    '"Those who keep learning, will keep rising in life."',
    '"The measure of intelligence is the ability to change."',
    '"So many books, so little time."',
    '"Be the change that you wish to see in the world."',
    '"I have not failed. I\'ve just found 10,000 ways that won\'t work."',
    '"Love all, trust a few, do wrong to none."',
    '"That which does not kill us makes us stronger."',
    '"Talk is cheap. Show me the code."',
    '"An expert is a person who has made all the mistakes that can be made in a very narrow field."',
    '"You have nothing to lose, but a lot to gain. Grind like hell."',
    '"There\'s real poetry in the real world. Science is the poetry of reality."',
    '"The person who moves a mountain begins by carrying away small stones."'
]

function updateWelcome() {
    let message = "";
    let quote = getRandomItem(quotes);
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
    
    if(hour >= 3 && hour <= 10) {
        message += "Good Morning";
    } else if(hour == 11 || hour == 12) {
        message += "Good Day";
    } else if(hour >= 13 && hour <= 16) {
        message += "Good Afternoon";
    } else if(hour >= 17 && hour <= 23 || hour >= 0 && hour <= 2) {
        message += "Good Evening";
    } else {
        message += "Hello";
    }

    message += ", " + getRandomItem(names) + "!";

    $(".hero-main-welcome").text(message);
    $(".hero-main-quote").text(quote);
}

updateWelcome();

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}