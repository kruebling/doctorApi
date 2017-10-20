import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('.input').submit(function(event) {
    $('#doctor').text("");
    event.preventDefault();

    let name = $('#name').val();
    let doctor = new Doctor();
    let searchQuery = doctor.search(name);

    searchQuery.then(function(response) {
      let body = JSON.parse(response);
      $('#results').append("<img src = 'img/loading.gif'>");
      $('#results').text('');
      if (body.data.length > 0) {
      body.data.forEach(function(data) {
        data.practices.forEach(function(practice) {
        $('#results').append(`<tr><td>${practice.name}</td><td>${practice.visit_address.street}</td><td>${practice.phones.number}</td></td>`);
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
