<template lang="html">
  <div>
    <h3>Search Results for {{ origin }} to {{ destination }}</h3>

    <div class="container header">
      <div>Departure Date</div>
      <div>Flight Number</div>
      <div>Plane</div>
      <div>Origin</div>
      <div>Destination</div>
    </div>

    <div class="container result"
         v-for="flight in flights"
         @click="gotoFlightDetails(flight.id)">
      <div>{{flight.departure_date}}</div>
      <div>{{flight.flight_number}}</div>
      <div>{{flight.airplane.name}}</div>
      <div>{{flight.origin}}</div>
      <div>{{flight.destination}}</div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'FlightSearchResults',
    props: ['origin', 'destination'],  // these ones happen to come from the router
    data() {
      return {
        flights: []
      };
    },

    // Equivalent of React's lifecycle method 'componentDidMount()';
    mounted() {
      console.log('[FlightSearchResults] MOUNTED');
      // const origin = this.$route.params.origin;
      // const destination = this.$route.params.destination;
      // const { origin, destination } = this.$route.params;  // ES6 object destructuring

      axios.get(`http://localhost:3000/flights/search/${this.origin}/${this.destination}`)
        .then(res => this.flights = res.data)
        .catch(err => console.warn('Flight search AJAX error:', err));
    },

    methods: {
      gotoFlightDetails( flightID) {
        console.log('ID:', flightID);
        this.$router.push({
          name: 'FlightDetails',
          params: {
            id: flightID
          }
        });
      }
    }
  }
</script>

<style lang="css" scoped>
  .container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .header {
    background-color: rgb(30, 28, 101);
    color: white;
  }

  .result {
    cursor: pointer;
  }

  .result:hover {
    background-color: #EEE;
    font-weight: bold;
  }
</style>
