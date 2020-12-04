const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (!err) {
      if (response.statusCode < 200 || response.statusCode >= 300) {
        callback(`URL NOT WORKING: ${response.statusCode}`);
      } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("The asked breed could not be found. We may need to do more research.");
        } else {
          callback(err, data[0]["description"]);
        }
      }
    }
  
  })
    .on('error', (err) => {
      callback(err);
    });
};


module.exports = { fetchBreedDescription };