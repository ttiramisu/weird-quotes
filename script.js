const quoteContainer = document.createElement('div');
quoteContainer.classList.add('flex');
document.body.appendChild(quoteContainer);

fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(data => {
    const quoteText = document.createElement('p');
    quoteText.textContent = data.quote;

    const authorText = document.createElement('p');
    authorText.textContent = `- ${data.author}`;

    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(authorText);
  })
  .catch(error => console.error(error));