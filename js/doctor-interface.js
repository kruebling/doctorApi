import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('.input').submit(function(event) {
    $('#results').append("<img src = 'img/loading.gif'>");
    event.preventDefault();

    let name = $('#name').val();
    let doctor = new Doctor();
    let searchQuery = doctor.search(name);

    searchQuery.then(function(response) {
      let body = JSON.parse(response);

      $('#results').text('');
      if (body.data.length > 0) {
      body.data.forEach(function(data) {
        data.practices.forEach(function(practice) {
        $('#results').append(`<tr><td>${practice.name}</td><td>${practice.visit_address.street}</td><td>${practice.phones[0].number}</td><td>${practice.website}</td><td>${practice.accepts_new_patients}</td></tr>`);
      });
    });
    } else {
      $('#doctor').text("No Doctors Found'");
    }
    }, function(error) {
    $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
