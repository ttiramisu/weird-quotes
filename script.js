const quoteContainer = document.createElement('div');
quoteContainer.classList.add('flex');
document.appendChild(quoteContainer);

fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => console.log(quote));