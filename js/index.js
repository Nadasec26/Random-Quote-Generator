var quotes = [
    " “Be yourself; everyone else is already taken.” ",
    " “So many books, so little time.” ",
    " “A room without books is like a body without a soul.” ",
    " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    " “Be the change that you wish to see in the world.” ",
    " “Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend” ",
    " “If you tell the truth, you don't have to remember anything.” "
];

var quote = document.getElementById("quote");


var lastIndex = -1;

function quoteClick() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    if(randomIndex == lastIndex){
        randomIndex = (randomIndex + 1) % quotes.length;
    }
    lastIndex = randomIndex;
    quote.textContent = quotes[randomIndex];
}
// console.log(quotes);

