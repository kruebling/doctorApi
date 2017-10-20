import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('.input').submit(function(event) {
    $('#doctor').text("");
    event.preventDefault();

    let name = $('#name').val();
    let query = $('#query').val();

    let user = new Doctor();
    let searchQuery = user.search(name, query);

    searchQuery.then(function(response) {
      let body = JSON.parse(response);
      $('#doctor').append("<img src = 'img/loading.gif'>");
      debugger;

      $('#doctor').text('');
      if (body > 0) {
      body.profile.forEach(function(doctor) {
        $('#doctor').append(`<tr><td>${doctor.properties.place}</td><td>${new Date(doctor.properties.time)}</td><td>${doctor.properties.mag}</td><td>${doctor.properties.tsunami}</td><td style = 'background-color:${color};'>${doctor.properties.alert}</td><td>${doctor.properties.felt}</td></tr> `);
      });
    } else {
      $('#doctor').text("No Doctors Found'");
    }
    }, function(error) {
    $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
