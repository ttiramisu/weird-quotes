fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => console.log(quote));