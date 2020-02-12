<template>
  <div>
    <ReservationConfirm
        v-if="seat.row && seat.col"
        :selectedSeat="seat"
        :flightID="id"
        :userID="userID"
        @seatConfirmed="seatBooked"
       />
    <div class="booking-message" v-if="showMessage">
      <p>Congratulation to your successful booking!</p>
    </div>
    <div class="seating" v-if="flight.airplane && flight.airplane.cols && flight.airplane.rows">
      <div v-for="row in flight.airplane.rows" class="planeRow">
        {{row}}
        <div  class="seat"
              v-for="col in flight.airplane.cols"
              v-bind:class="[seatStatus(row, col), selectedSeat(row, col)]"
              @click="selectSeat(col, row)">
          {{ col | toSeatLetter  }}
        </div>
        {{row}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ReservationConfirm from '@/components/ReservationConfirm.vue';

const FAKE_CURRENT_USER_ID = 13;

export default {
  name: 'PlaneArea',
  props: ['flight', 'reservations', 'user_reservations', 'id'], // {
  //   cols: Number,
  //   rows: Number,
  //   reservations: Array
  // },
  components: {
      ReservationConfirm  // FlightDetails will render this one as a child
    },
  data() {
    return {
      //flight: {},
      seat: {
        row: 0,
        col: 0
      },
      userID: FAKE_CURRENT_USER_ID,
      showMessage: false
    };
  },
  methods: {
      seatStatus(row, col) {

        // Loop over the reservations for this flight, and return an 'occupied' class name
        // if we find this row + col as a reservation; otherwise return 'free'
        // return Math.random() > 0.5 ? 'occupied' : 'free';

        // let found = false;
        // this.flight.reservations.forEach( r => {
        //   if (r.row === row && r.col === col) {
        //     found = true;
        //   }
        // });
        // return found ? 'occupied' : 'free';

        // const found = this.flight.reservations.some( r => r.row === row && r.col === col );
        // return found ? 'occupied' : 'free';

        // for (let i = 0; i < this.reservations.length; i++) {
        //   const r = this.reservations[i];
        //   // Does the seat we are currently checking correspond to this reservation 'r'
        //   if ( r.rows === row && r.cols === col ) {
        //
        //     // if (r.user_id === FAKE_CURRENT_USER_ID) {
        //     //   return 'booked';  // This resevation belongs to the logged-in user
        //     // } else {
        //     //   return 'occupied';
        //     // }
        //
        //     return r.user_id === FAKE_CURRENT_USER_ID ? 'booked' : 'occupied';
        //   }
        // }  // for

        const seatKey = `${row}-${col}`;
        
        if (seatKey in this.user_reservations) {
          return 'booked';
        } else if (seatKey in this.reservations) {
          return 'occupied';
        } else {
          return 'free';
        }

        //return 'free';

      },  // seatStatus()
      selectSeat(col, row) {
        console.log('selectSeat()', row, col);
        this.showMessage = false;
        // this.seat.row = row;
        // this.seat.col = col;
        this.seat = { row, col };
      },
      selectedSeat(row, col) {
        return (row  === this.seat.row && col === this.seat.col) && 'selected';
      },
      seatBooked( reservation ) {
        console.log('new reservation', reservation);

        // Add to the list of reservations for this
        // flight in state, so it will appear as
        // booked by us immediately in the seating
        // diagram

        this.showMessage = true;

        this.$emit('seatBooked', reservation);
        // Stop the ReservationConfirm component
        // from appearing, and stop the selected
        // seat from appearing green
        this.seat = { row: 0, col: 0 };

      }
    },
    // Filters are like Rails template helpers, intended just for transforming text in your template
    filters: {
      toSeatLetter(num) {
        return String.fromCharCode(64 + num);
      }
    }
}
</script>

<style scoped>
  .selected {
    background-color: lightgreen;
    border: 1px solid lime;
  }

  .seat {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #CCC;
    line-height: 40px;
    text-align: center;
    /* margin-right: 6px;
    margin-bottom: 6px; */
    margin: 3px;
  }

  .occupied {
    background-color: grey;
    pointer-events: none;  /* Ignore clicks on occupied seats! */
  }

  .booked {
    background-color: orange;
    pointer-events: none;
  }

  .free {
    cursor: pointer;
  }

  .booking-message {
    width: 200px;
    margin: 1rem auto;
    padding: 5px;
    box-shadow: 2px 2px 5px #9f9e9e;
  }
</style>
