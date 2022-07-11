const quotes = [
    {
        author:"Buffet",
        quote:"Stock market is a device for transferring money from the impatient to patient",
    },
    {
        author:"Linch",
        quote:"Investing without research is like playing stupid poker and never looking at the cards",
    },
    {
        author:"W.Buffet",
        quote:"If you are not willing to own a stock for 10 years don’t even think about owning it for 10 minutes.",
    }
]
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

randomNumber = Math.floor(Math.random()*quotes.length);
quote.innerHTML=`${quotes[randomNumber].quote}-${quotes[randomNumber].author}`;