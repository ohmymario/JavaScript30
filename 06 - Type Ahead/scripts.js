const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  // Using spread operator to pass in data indiviually
  // This avoids nesting if we passed in just (data) 
  .then(data => cities.push(...data)) 

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // check if city or state was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  }) 
}