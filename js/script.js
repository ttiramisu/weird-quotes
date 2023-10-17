let month;
let day;

////////////////
////////////////
//// QUOTES ////
////////////////
////////////////
const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('quoteAuthor');

//////////////
//////////////
//// WIKI ////
//////////////
//////////////

// MISC
const dateContainer = document.getElementById('date-container');
const wikiContainer = document.getElementById('wiki-container');
const eventContainer = document.getElementById('event-container');

///////////////////////
// CREATING ELEMENTS //
///////////////////////
const displayDateHeader = document.createElement('h4');
const displayDate = document.createElement('p');
displayDate.classList.add('mb-3');

const displayWikiHeader = document.createElement('h4');
const displayWiki = document.createElement('a');
displayWiki.classList.add('mb-3');

////////////////////////
// ADDING THEM TO DOM //
////////////////////////
displayDateHeader.textContent = `Date`;
displayWikiHeader.textContent = `Wikipedia Article`;

//// WIKI ////

displayDate.setAttribute('id', 'date');

const getDay = function () {
  month = document.getElementById("month").value;
  day = document.getElementById("day").value;

  fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
    .then(response => response.json())
    .then(data => {
      eventContainer.innerHTML = '';
      const { wikipedia, date } = data;

      dateContainer.appendChild(displayDateHeader);
      dateContainer.appendChild(displayDate);
      displayDate.textContent = date;

      wikiContainer.appendChild(displayWikiHeader);
      wikiContainer.appendChild(displayWiki);
      displayWiki.textContent = wikipedia;
      displayWiki.target = '_blank';
      displayWiki.href = wikipedia;

      const last5Events = data.events.slice(-5);
      console.log(last5Events);

      last5Events.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.innerHTML =
          `<div>
            <h5>${index + 1}.</h5>
            <p><strong>Description:</strong> ${event.description}</p>
            <p><strong>Year:</strong> ${event.year}</p>
            <p class="mb-4"><strong>Wikipedia:</strong> ${event.wikipedia.length > 0 ? event.wikipedia.map(w =>
            `<a href="${w.wikipedia}" target="_blank">${w.title}</a>`).join(', ')
            : "None"}</p>
          </div>`;
        eventContainer.appendChild(eventElement);
      });
    })
    .catch(error => console.error(error));
};

fetch('https://programming-quotesapi.vercel.app/api/random')
  .then(response => response.json())
  .then(quote => {
    quoteText.textContent = quote.quote;

    authorText.textContent = ` ${quote.author}`;
  })
  .catch(error => console.error(error));

const today = function () {
  let now = new Date().toLocaleDateString('en-us', { month: "numeric", day: "numeric" });
  month = now.substring(0, 2);
  day = now.substring(3, 5);

  fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
    .then(response => response.json())
    .then(data => {
      eventContainer.innerHTML = '';
      const { wikipedia, date } = data;

      dateContainer.appendChild(displayDateHeader);
      dateContainer.appendChild(displayDate);
      displayDate.textContent = date;

      wikiContainer.appendChild(displayWikiHeader);
      wikiContainer.appendChild(displayWiki);
      displayWiki.textContent = wikipedia;
      displayWiki.target = '_blank';
      displayWiki.href = wikipedia;

      const last5Events = data.events.slice(-5);
      console.log(last5Events);

      last5Events.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.innerHTML =
          `<div>
            <h5>${index + 1}.</h5>
            <p><strong>Description:</strong> ${event.description}</p>
            <p><strong>Year:</strong> ${event.year}</p>
            <p class="mb-4"><strong>Wikipedia:</strong> ${event.wikipedia.length > 0 ? event.wikipedia.map(w =>
            `<a href="${w.wikipedia}" target="_blank">${w.title}</a>`).join(', ')
            : "None"}</p>
          </div>`;
        eventContainer.appendChild(eventElement);
      });
    })
    .catch(error => console.error(error));
};

const randomDate = function () {
  month = Math.floor(Math.random() * 13);
  day = Math.floor(Math.random() * 31);

  if (month === 0 || day === 0) {
    month = Math.floor(Math.random() * 13);
    day = Math.floor(Math.random() * 31);
  }

  if (month === 2 && day > 28) {
    day = Math.floor(Math.random() * 29);
  }

  fetch(`https://byabbe.se/on-this-day/${month}/${day}/events.json`)
    .then(response => response.json())
    .then(data => {
      eventContainer.innerHTML = '';
      const { wikipedia, date } = data;

      dateContainer.appendChild(displayDateHeader);
      dateContainer.appendChild(displayDate);
      displayDate.textContent = date;

      wikiContainer.appendChild(displayWikiHeader);
      wikiContainer.appendChild(displayWiki);
      displayWiki.textContent = wikipedia;
      displayWiki.target = '_blank';
      displayWiki.href = wikipedia;

      const last5Events = data.events; //.slice(-5);
      console.log(last5Events);

      last5Events.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.innerHTML =
          `<div>
            <h5>${index + 1}.</h5>
            <p><strong>Description:</strong> ${event.description}</p>
            <p><strong>Year:</strong> ${event.year}</p>
            <p class="mb-4"><strong>Wikipedia:</strong> ${event.wikipedia.length > 0 ? event.wikipedia.map(w =>
            `<a href="${w.wikipedia}" target="_blank">${w.title}</a>`).join(', ')
            : "None"}</p>
          </div>`;
        eventContainer.appendChild(eventElement);
      });
    })
    .catch(error => console.error(error));
};