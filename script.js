const quoteContainer = document.createElement('div');
quoteContainer.classList.add('flex');
document.body.appendChild(quoteContainer);

fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => {
    const quoteText = document.createElement('p');
    quoteText.textContent = quote.en;
    quoteContainer.appendChild(quoteText);
  })
  .catch(error => console.error(error));