<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      <div class="page-title">
        <h3>Women's Health Education</h3>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-12">
        <div class="page-title">
          <h5>Featured Videos</h5>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/2fbUv72vKWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Hello Periods!</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/xqWGlQZezhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">छाउपडी गीत | म जान्न है आमा | Chhaupadi song | Ma janna hai aama</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/DoJs5ZuQq7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Safe Motherhood: A Woman's Right</h6>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-4">
      <div class="col-12">
        <div class="page-title">
          <h5>Motherhood</h5>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/4bVaw6lCJhg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">NCP Better Cord Care Saves Babies Lives</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/Sc4NK9KxxHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Suaahara: Feeding a Sick Child</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/qQf6fLr6S-Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">SUAAHARA: Good Nutrition</h6>
          </div>
        </div>
      </div>
    </div>


    <div class="row mt-4">
      <div class="col-12">
        <div class="page-title">
          <h5>Others</h5>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/HwgGBv547Sw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Nepali Hyperventilation</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/-vZiwTjd9qM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Nepali Vomiting</h6>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-4">
        <div class="card card-hover">
          <div class="individual-education">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/1GDcbUXCltY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h6 class="pt-2">Dr. Niva Ojha talks about pregnancy</h6>
          </div>
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
  name: "Education",
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
  @import "../css/education.scss";

</style>
