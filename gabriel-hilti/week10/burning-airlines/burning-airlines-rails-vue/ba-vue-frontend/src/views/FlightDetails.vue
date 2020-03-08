<template>
  <div class="container">
    <h1>Virgin Airlines</h1>
    <h2>{{ flight.date }} Flight {{ flight.flight_number }} {{ flight.origin }} &gt; {{ flight.destination }}</h2>
    <!-- <ul v-for="booking in reservations">
      <li key="booking.id">{{ booking.user }}</li>
    </ul> -->
    <PlaneArea :flight="flight" :user_reservations="user_reservations" :reservations="reservations" :id="id" @seatBooked="book" /> <!-- cols="cols" :rows="rows" -->
  </div>
</template>

<script>
  import axios from 'axios';
  import PlaneArea from '@/components/PlaneArea.vue'

  export default {
    name: 'Reservation',
    props: ['id'],
    data() {
      return {
        // date: '',
        // flight_number: '',
        // origin: '',
        // destination: '',
        // rows: 0,
        // cols: 0,
        flight: {},
        reservations: {},
        user_reservations: {}
      };
    },
    components: {
      PlaneArea
    },
    mounted() {
      setInterval(() => {
      axios.get(`http://localhost:3000/flights/${this.id}`)
        .then(res => {
          console.log(res);
          this.flight = res.data.flight;
          this.reservations = res.data.reservations;
          this.user_reservations = res.data.user_reservations;
        })
        .catch(err => console.warn(`API Request of flight with ID ${this.id} didn\'t work`));
      }, 1000);

    },
    methods: {
      book( reservation ) {
        this.reservations[`${reservation.row}-${reservation.col}`] = 1;
      }
    }
  }
</script>

<style scoped>

</style>
