<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row wrapper-image-section">
      <div class="col-12 wrapper-image">
        <div class="wrapper-card-section">
          <div class="card shadow wrapper-card">
            <h4 class="card-title title-box shadow">
              Introduction
            </h4>

            <div class="card-body">
              <div class="description">
                <!-- Find yourself the relevant materials for health awareness <br /> -->
                <!-- get connected with health expert, get instant view near of pharmacy, hospitals. -->
                <!-- Overall, Take care of your health, wherever you are through one-stop digital platform. -->
                <h1>Health</h1>
                <h1>Awareness</h1>

              </div>
              <div class="call-for-action">
                <b-button variant="outline-info">Explore</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="featured-stories card-view" id="featured-stories">
      <div class="row">
        <div class="col-12">
          <div class="card shadow">
            <div class="title-box shadow">
              <h6>Featured Stories</h6>
            </div>

            <div class="row story-row">
              <div class="col-4">
                <div class="individual-story card-hover">
                  <b-img class="pt-3" src="fear.png" fluid></b-img>
                  <h6 class="pt-4">Being a Girl Thing</h6>
                </div>
              </div>

              <div class="col-4">
                <div class="individual-story card-hover">
                  <iframe width="100%" class="pt-3" height="361" src="https://www.youtube.com/embed/rZC8E7p3-xs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <h6 class="pt-4">Nepal's Female Community Health Volunteers - Saving Lives, Empowering Women</h6>
                </div>
              </div>

              <div class="col-4">
                <div class="individual-story card-hover">
                  <b-img class="pt-3" src="notouch.png" fluid></b-img>
                  <h6 class="pt-4">Chaupadi, a tradition in Nepal, turns menstruating women into untouchables</h6>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-12">
                <b-button variant="outline-primary">Read More</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12">
        <div class="card-view">
          <div class="card shadow">
            <div class="title-box shadow">
              <h6>Food</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12" id="doctors">
        <div class="card-view">
          <div class="card shadow">
            <div class="title-box shadow">
              <h6>Doctors</h6>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="col-12">
                  <div class="doctors-list text-center">
                    <div class="individual-doctor card-hover">
                      <b-img class="pt-3" src="doctors/drnira.jpg" fluid></b-img>
                      <h6 class="pt-2">Dr. Nira Shrestha</h6>
                      <small>Department of Gynaecology and Obstetrics <br /> Kathmandu Medical College Teaching Hospital</small>
                    </div>

                    <div class="individual-doctor card-hover">
                      <b-img class="pt-3" src="doctors/drbal.jpg" fluid></b-img>
                      <h6 class="pt-2">Dr. Bal Krishna Shah</h6>
                      <small>MBBS, DGO Obs & Gynaecology</small>
                    </div>

                    <div class="individual-doctor card-hover">
                      <b-img class="pt-3" src="doctors/drsabina.jpg" fluid></b-img>
                      <h6 class="pt-2">Dr. Sabina Shrestha</h6>
                      <small>Obsetetrician and Gynaecologist <br /> Om Hospital and Research Center</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="call-for-action">
                <b-button variant="outline-info" to="/doctor">Know More</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 col-sm-12" id="education">
        <div class="card-view">
          <div class="card shadow">
            <div class="title-box shadow">
              <h6>Education</h6>
            </div>

            <div class="card-body">
              <div class="row">
                <div class="education-list text-center">
                  <div class="individual-education card-hover">
                    <iframe width="100%" height="150" src="https://www.youtube.com/embed/2fbUv72vKWM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h6 class="pt-2">Hello Periods!</h6>
                  </div>

                  <div class="individual-education card-hover">
                    <iframe width="100%" height="150" src="https://www.youtube.com/embed/DoJs5ZuQq7k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h6 class="pt-2">Safe Motherhood: A Woman's Right</h6>
                  </div>

                  <div class="individual-education card-hover">
                    <iframe width="100%" height="150" src="https://www.youtube.com/embed/xqWGlQZezhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h6 class="pt-2">छाउपडी गीत | म जान्न है आमा | Chhaupadi song | Ma janna hai aama</h6>
                  </div>
                </div>
              </div>

              <div class="call-for-action">
                <b-button variant="outline-info" to="/education">Know More</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer></app-footer>
</div>
</template>

<script>
// import { mapState,mapActions } from 'vuex';
import AppHeader from './Header.vue';
import Footer from './Footer.vue';

const axios = require('axios');
export default {
  name: "IndexPage",
  components:{
    'app-header': AppHeader,
    'app-footer': Footer,
  },

  data() {
    return {
      api_data: '',
    }
  },

  mounted () {
    // axios
    //   .get('https://75anpql3b4.execute-api.ap-southeast-1.amazonaws.com/development/dietary-supplements/list',
    //   {
    //     headers: {
    //       diet_id: 'skin'
    //     }
    //
    // })
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
