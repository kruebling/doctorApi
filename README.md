# _Medical Lookup_

#### _Dual API calls in a single app 10 / 20 / 2017_

#### By _Keegan Ruebling_

## This application provides the following functionality ("user stories"):

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
* A user can search by location (instead of just hardcoding a value for Portland). This will involve making two API calls: one to geocode the latitude and longitude of a location and then a second call to the BetterDoctor API.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

## Setup/Installation Requirements

1. git clone https://github.com/kruebling/doctorApi into local directory
2. run `npm install` inside directory
3. run `bower install` inside directory
4. run `gulp build` inside directory
5. run `gulp serve` inside directory

## Known Bugs

_App is currently a work in progress_

## Support and contact details

_keegan.ruebling@gmail.com_

### License

MIT License

Copyright (c) 2017 Keegan Ruebling
