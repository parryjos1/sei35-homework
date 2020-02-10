<template>
  <div class="container">
    <h1>Virgin Airlines</h1>
    <h2>{{ date }} Flight {{ flight_number }} {{ origin }} &gt; {{ destination }}</h2>
    <!-- <ul v-for="booking in reservations">
      <li key="booking.id">{{ booking.user }}</li>
    </ul> -->
    <PlaneArea :cols="cols" :rows="rows" :reservations="reservations" />
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
        date: '',
        flight_number: '',
        origin: '',
        destination: '',
        rows: 0,
        cols: 0,
        reservations: []
      };
    },
    components: {
      PlaneArea
    },
    mounted() {
      axios.get(`http://localhost:3000/flights/${this.id}`)
        .then(res => {
          console.log(res);
          this.date = res.data.departure_date;
          this.flight_number = res.data.flight_number;
          this.origin = res.data.origin;
          this.destination = res.data.destination;
          this.rows = res.data.airplane.rows;
          this.cols = res.data.airplane.cols;
          this.reservations = res.data.reservations.map(r => ({
            rows: r.row,
            cols: r.col,
            id: r.id,
            user: r.user.name
          }));

        })
        .catch(err => console.warn(`API Request of flight with ID ${this.id} didn\'t work`));
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
