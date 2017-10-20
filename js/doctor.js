var apiKey = require('./../.env').apiKey;
var googleApiKey = require('./../.env').googleApiKey;

export class Doctor {

  locQuery(location) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  docQuery(lat, lng, name, query) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${query}&location=${lat}%2C${lng}%2C100&skip=0&limit=25&user_key=${apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
