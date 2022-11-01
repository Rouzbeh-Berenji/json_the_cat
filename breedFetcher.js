const request = require('request');

const fetchBreedDescription = function(breed) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log(error);
      process.exit();
    } else {
      let data = JSON.parse(body);
      console.log(data);
    }
  });
};
fetchBreedDescription("Chartreux");