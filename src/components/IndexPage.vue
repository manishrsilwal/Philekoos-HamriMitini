<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      <div class="col-12 wrapper-image">
        <div class="wrapper-card-section">
          <div class="card shadow wrapper-card">
            <h3 class="card-title">
              Know your necessary diet
            </h3>

          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">

        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">

        </div>
      </div>

      <div class="col-lg-4 col-sm-12">
        <div class="card shadow">

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import { mapState,mapActions } from 'vuex';
import AppHeader from './Header.vue';

const axios = require('axios');
export default {
  name: "IndexPage",
  components:{
    'app-header': AppHeader,
  },

  data() {
    return {
      api_data: '',
    }
  },

  mounted () {
    // axios
    //   .get('https://75anpql3b4.execute-api.ap-southeast-1.amazonaws.com/development/list-contact')
    //   .then(response => (this.api_data = response))
  },

  // methods:{
  //   ...mapActions(['setToken']),


  // }
};
</script>

<style lang="scss" scoped>
  @import "../css/index.scss";

</style>
