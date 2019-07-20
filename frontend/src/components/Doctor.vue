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
      <div class="col-12 col-lg-4" v-for="values in api_data.data">
        <div class="card card-hover">
          <div class="individual-doctor">
            <b-img class="pt-3" :src="'https://hamrimitini.s3-ap-southeast-1.amazonaws.com/doctors/' + values.image" fluid></b-img>
            <h6 class="pt-2">{{ values.name }}</h6>
            <small>{{ values.affiliation }}</small>
          </div>
          <div class="call-for-action">
            <b-button variant="outline-info" v-b-modal.modal-1>Take an Appointment</b-button>
          </div>
        </div>
      </div>
    </div>

    <b-modal ref="modal1" id="modal-1" title="Appointment Form" hide-footer>
      <!-- <p class="my-4">Hello from modal!</p> -->
      <b-form @submit.prevent>
        <b-form-group label-for="name">
          <small class="pb-3">Full Name</small>
          <b-form-input placeholder="Your Full Name"></b-form-input>
        </b-form-group>

        <b-form-group label-for="name">
          <small class="pb-3">Phone Number</small>
          <b-form-input placeholder="Your Phone Number"></b-form-input>
        </b-form-group>

        <b-form-group label-for="name">
          <small class="pb-3">Address</small>
          <b-form-input placeholder="Your Address"></b-form-input>
        </b-form-group>

        <b-form-group label-for="name">
          <small class="pb-3">Date of Appointment</small>
          <b-form-input type="date" placeholder="Date"></b-form-input>
        </b-form-group>

        <b-form-group label-for="name">
          <small class="pb-3">Reason for Appointment</small>
          <b-form-textarea placeholder="Tell us about your problem"></b-form-textarea>
        </b-form-group>

        <div class="col-md-12 text-center">
          <b-button type="submit" variant="outline-success" @click="FormSubmit">Submit Appointment Form</b-button>
        </div>
      </b-form>
    </b-modal>

    <b-toast id="success-toast" variant="success" solid append-toast toaster="b-toaster-top-center">
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">

        <strong class="mr-auto">Form is successfully submitted</strong>
      </div>
        Please check your email for further details.
    </b-toast>
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
      .then(
        response => (this.api_data = response)
    )
  },

  methods:{
    // ...mapActions(['setToken']),
    FormSubmit(){
      this.$refs.modal1.hide();
      this.$bvToast.show('success-toast');
    }

  }
};
</script>

<style lang="scss" scoped>
  @import "../css/doctor.scss";

</style>
