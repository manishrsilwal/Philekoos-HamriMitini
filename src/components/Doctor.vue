<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      Doctor Section
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
  @import "../css/doctor.scss";

</style>
