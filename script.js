let month;
let day;

const getDay = function () {
  month = document.getElementById("month").value;
  day = document.getElementById("day").value;
}

fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(data => {
    const quoteText = document.getElementById('quoteText');
    quoteText.textContent = data.quote;

    const authorText = document.getElementById('quoteAuthor');
    authorText.textContent = `- ${data.author}`;
  })
  .catch(error => console.error(error));

  // https://byabbe.se/on-this-day/${month}/${day}/events.json
