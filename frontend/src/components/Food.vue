<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      <div class="page-title">
        <h3>Food Supplements</h3>
      </div>
    </div>

    <div class="row" v-show="formShow">
      <div class="col-12">
        <div class="food-form-section d-flex align-items-center justify-content-center">
          <form class="">
            <div class="first-step steps" v-show="first_step">
              <h5 class="mb-4">Enter your age</h5>
              <b-input type="text" block placeholder="Age">Age</b-input>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="FirstSubmit">Next</b-button>
            </div>

            <div class="second-step steps" v-show="second_step">
              <h5 class="mb-4">Are you taking any vitamins or not?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="A">Yes</b-form-radio>
                  <b-form-radio name="some-radios" value="B">No</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="SecondSubmit">Next</b-button>
            </div>

            <div class="third-step steps text-center" v-show="third_step">
              <h5 class="mb-4">What are you most concerned about?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="bones">Bones</b-form-radio>
                  <b-form-radio name="some-radios" value="digestions">Digestion</b-form-radio>
                  <b-form-radio name="some-radios" value="eyes">Eyes</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="heart">Heart</b-form-radio>
                  <b-form-radio name="some-radios" value="memory">Memory</b-form-radio>
                  <b-form-radio name="some-radios" value="skin">Skin</b-form-radio>
                </b-form-radio-group>
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="weight-loss">Weight Loss</b-form-radio>
                  <b-form-radio name="some-radios" value="muscles">Muscles</b-form-radio>
                  <b-form-radio name="some-radios" value="others">Others</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="ThirdSubmit">Next</b-button>
            </div>

            <div class="fourth-step steps text-center" v-show="fourth_step">
              <h5 class="mb-4">Which of these best describes your diet?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="all">All</b-form-radio>
                  <b-form-radio name="some-radios" value="vegetarian">Vegetarian</b-form-radio>
                  <b-form-radio name="some-radios" value="non-veg">Non Vegetarian</b-form-radio>
                  <b-form-radio name="some-radios" value="limited">Limited due to medications</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="FourthSubmit">Next</b-button>
            </div>

            <div class="fifth-step steps" v-show="fifth_step">
              <h5 class="mb-4">Are there any kinds of food you avoid due to medical reasons?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="red-meat">Red Meat</b-form-radio>
                  <b-form-radio name="some-radios" value="fats">Fats and Gluten</b-form-radio>
                  <b-form-radio name="some-radios" value="dairy">Dairy</b-form-radio>
                  <b-form-radio name="some-radios" value="none">None</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="FifthSubmit">Next</b-button>
            </div>

            <div class="sixth-step steps" v-show="sixth_step">
              <h5 class="mb-4">How often you usually get sick?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="none">I stay pretty healthy</b-form-radio>
                  <b-form-radio name="some-radios" value="usually">I usually get sick</b-form-radio>
                  <b-form-radio name="some-radios" value="different">It's different every month</b-form-radio>
                  <b-form-radio name="some-radios" value="no-track">I haven't kept any track</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="SixthSubmit">Next</b-button>
            </div>

          </form>

        </div>

      </div>
    </div>

    <div class="row" v-show="finish">
      <div class="col-12">
        <div class="results">
          <b-tabs pills content-class="mt-3">
            <b-tab title="Supplements for You" active>
              <!-- <b-card-text>Here you add theme</b-card-text> -->
              <b-form class="card shadow">
                <h3>Needed Supplements</h3>
                <h4>For Skin</h4>
                <h4>For Weight Loss</h4>
              </b-form>
            </b-tab>

            <b-tab title="Get Supplements">
              <!-- <b-card-text>Tab Contents 2</b-card-text> -->
              <div class="card shadow">
                <h3 class="pb-3">Location for Supplements</h3>
              
              </div>
            </b-tab>

            <b-tab title="Need a Help?" active>
              <!-- <b-card-text>Here you add theme</b-card-text> -->
              <b-form class="card shadow">
                <h3>Recommended Nutritionist</h3>
              </b-form>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
  <!-- data <br />
  <div v-for="list in api_data">
    {{ list }}
  </div> -->
</div>
</template>

<script>
import AppHeader from './Header.vue';

const axios = require('axios');
export default {
  name: "Food",
  components:{
    'app-header': AppHeader,
  },

  data() {
    return {
      api_data: '',
      formShow: true,
      first_step: true,
      second_step: false,
      third_step: false,
      fourth_step: false,
      fifth_step: false,
      sixth_step: false,
      finish: false,
    }
  },

  mounted () {
    // axios
    //   .get('https://75anpql3b4.execute-api.ap-southeast-1.amazonaws.com/development/dietary-supplements/list',
    //   {
    //     headers: {
    //       'diet_id': 'skin'
    //     }
    //   })
    //   .then(response => (this.api_data = response))
  },

  methods:{
    // ...mapActions(['setToken']),
    FirstSubmit(){
      this.first_step = false,
      this.second_step = true
    },

    SecondSubmit(){
      this.second_step = false,
      this.third_step = true
    },

    ThirdSubmit(){
      this.third_step = false,
      this.fourth_step = true
    },

    FourthSubmit(){
      this.fourth_step = false,
      this.fifth_step = true
    },

    FifthSubmit(){
      this.fifth_step = false,
      this.sixth_step = true
    },

    SixthSubmit(){
      this.sixth_step = false,
      this.formShow = false,
      this.finish = true
    },

  }
};
</script>

<style lang="scss" scoped>
  @import "../css/food.scss";

</style>
