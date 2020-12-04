const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
  if (!err) {
    if (response.statusCode < 200 || response.statusCode >= 300) {
      console.log(`URL NOT WORKING: ${response.statusCode}`);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log("The asked breed could not be found. We may need to do more research.");
      } else {
        console.log(data[0]["description"]);
      }
    }
  }

})
  .on('error', (err) => {
    console.error(err);
  });