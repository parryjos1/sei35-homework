<template>
  <div class="">
    <div v-for="row in rowArray" class="row-container">
      <div v-for="col in colArray" class="col-container">
        <div v-if="!checkAvailability(col, row)"
        @click="book(col,row)">{{row}}{{colLabel[col - 1]}}</div>
        <div v-else class="occupied">{{checkAvailability(col, row)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PlaneArea',
  props: {
    cols: Number,
    rows: Number,
    reservations: Array
  },
  data() {
    return {
      rowArray: [],
      colArray: [],
      colLabel: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
    };
  },
  // mounted() {
  //   console.log('updated');
  //   console.log('reservations props:', this.reservations);
  //
  //   this.rowArray = this.row(this.rows);
  //   this.colArray = this.col(this.cols);
  // },
  mounted() {

        this.rowArray = this.row(this.rows);
        this.colArray = this.col(this.cols);
      
  },
  methods: {
    row(row) {
      let counter = 0;
      return Array(row).fill(0).map(r => ++counter);
    },
    col(col) {
      let counter = 0;
      return Array(col).fill(0).map(r => ++counter);
    },
    checkAvailability(col, row) {
      for (let i = 0; i < this.reservations.length; i++) {
        if (col === this.reservations[i].cols && row === this.reservations[i].rows) {
          return this.reservations[i].user;
        }
      }
      return false;
    },
    book(col, row) {
      axios.post(`http://localhost:3000/reservation/newUser/${col}/${row}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.warn(err));
    }
  }
}
</script>

<style scoped>
  .row-container {
    display: block;
    width: 600px;
  }

  .col-container {
    display: inline-block;
    width: 60px;
    height: 60px;
    background-color: green;
    margin: 2px;
    text-align: center;
    line-height: 60px;
  }

  .occupied {
    background-color: red;
  }
</style>
