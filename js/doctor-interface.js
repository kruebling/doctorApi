import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('.input').submit(function(event) {
    event.preventDefault();

    let location = $('#location').val();
    let doctor = new Doctor();
    let locQuery = doctor.locQuery(location);

    locQuery.then(function(response) {
      let body = JSON.parse(response);
      let lat = body.results[0].geometry.location.lat;
      let lng = body.results[0].geometry.location.lng;
      debugger;
      let name = $('#name').val();
      let query = $('#query').val();
      let docQuery = doctor.docQuery(lat, lng, name, query);
      // $('#results').append("<img src = 'img/loading.gif'>");

        // Doctor Search
        docQuery.then(function(response) {
          let body = JSON.parse(response);
          $('#results').text('');
          if (body.data.length > 0) {
            body.data.forEach(function(data) {
              data.practices.forEach(function(practice) {
                $('#results').append(`<tr><td>${practice.name}</td><td>${practice.visit_address.street}</td><td>${practice.visit_address.city}</td><td>${practice.phones[0].number}</td><td>${practice.website}</td><td>${practice.accepts_new_patients}</td></tr>`);
              });
            });
          } else {
            $('#results').text("No Doctors Found");
          }
        }, function(error) {
          $('#showErrors').text(`There was an error processing your doctor query: ${error.message}`);
        });
      }, function(error) {
        $('#showErrors').text(`There was an error processing your location query: ${error.message}`);
    });
  });
});
