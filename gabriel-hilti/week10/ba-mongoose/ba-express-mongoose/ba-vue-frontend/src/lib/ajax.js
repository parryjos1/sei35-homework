import axios from 'axios';

// Define the API domain and paths we need for our requests
// The paths depend on what is defined in the Rails routes.rb file
const BASE_URL = 'http://localhost:1337';

const SEARCH_PATH = '/flights/search';
const FLIGHT_PATH = '/flights';
const RESERVATION_PATH = '/reservations';

export default {
  getFlightSearchResults(origin, destination) {
    const url = `${BASE_URL}${SEARCH_PATH}/${origin}/${destination}`;
    return axios.get(url);
    // Returns a promise!
    // So we need to attach .then() to
    // our call to getFlightSearchResults when we us it in our components
  },

  getFlightDetails(id) {
    const url = `${BASE_URL}${FLIGHT_PATH}/${id}`;
    return axios.get(url);
  },

  createReservation(row, col, flightID, userID) {
    const url = `${BASE_URL}${RESERVATION_PATH}`;
    return axios.post(url, {
      row, col,
      user_id: userID,
      flight_id: flightID
    });
  }

};
