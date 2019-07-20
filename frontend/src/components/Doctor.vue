<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      <div class="page-title">
        <h3>Our Awesome Doctors</h3>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-doctor">
            <b-img class="pt-3" src="doctors/drnira.jpg" fluid></b-img>
            <h6 class="pt-2">Dr. Nira Shrestha</h6>
            <small>Department of Gynaecology and Obstetrics <br /> Kathmandu Medical College Teaching Hospital</small>
          </div>
          <div class="call-for-action">
            <b-button variant="outline-info" to="/doctor">Take an Appointment</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-doctor">
            <b-img class="pt-3" src="doctors/drbal.jpg" fluid></b-img>
            <h6 class="pt-2">Dr. Bal Krishna Shah</h6>
            <small>MBBS, DGO Obs & Gynaecology</small>
          </div>
          <div class="call-for-action">
            <b-button variant="outline-info" to="/doctor">Take an Appointment</b-button>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-doctor">
            <b-img class="pt-3" src="doctors/drsabina.jpg" fluid></b-img>
            <h6 class="pt-2">Dr. Sabina Shrestha</h6>
            <small>Obsetetrician and Gynaecologist <br /> Om Hospital and Research Center</small>
          </div>

          <div class="call-for-action">
            <b-button variant="outline-info" to="/doctor">Take an Appointment</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AppHeader from './Header.vue';

const axios = require('axios');
export default {
  name: "Doctor",
  components:{
    'app-header': AppHeader,
  },

  data() {
    return {
      api_data: '',
    }
  },

  mounted () {
    axios
      .get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/doctors-list')
      .then(response => (this.api_data = response))
  },

  // methods:{
  //   ...mapActions(['setToken']),


  // }
};
</script>

<style lang="scss" scoped>
  @import "../css/doctor.scss";

</style>
