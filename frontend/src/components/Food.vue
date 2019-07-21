<template>
<div id="app">
  <app-header></app-header>

  <div class="contents">
    <div class="row">
      <div class="page-title">
        <h3>Food Supplements</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card shadow">
          <p>
            Some time food is not just enough, extra nutrients are needed.
          </p>

          <p>
            When we say "supplements," we're talking about vitamins, minerals, herbs, and other natural products. They are things we take in addition to what we eat -- they supplement our diet for better health. When used right, supplements can help keep our body and mind well in many ways.
          </p>
        </div>
      </div>
    </div>

    <div class="row" v-show="formShow">
      <div class="col-12">
        <h3>Please fill up the form to know about necessary supplements:</h3>
        <div class="food-form-section d-flex align-items-center justify-content-center">
          <form>
            <div class="first-step steps card shadow" v-show="first_step">
              <h5 class="mb-4">Enter your age</h5>
              <b-input type="text" size="lg" block placeholder="Age">Age</b-input>
              <!-- <b-form-select size="lg" class="mb-3">
                <template slot="first">
                  <option value="" disabled>Select Your Age</option>
                </template>
                <option value="a">20-30</option>
                <option value="b">30-40</option>
                <option value="c">40-50</option>
                <option value="d">50-60</option>
              </b-form-select> -->
              <b-button variant="outline-success" class="mt-4 mb-4" @click="FirstSubmit">Next</b-button>
            </div>

            <div class="second-step steps card shadow" v-show="second_step">
              <h5 class="mb-4">Are you taking any vitamins or not?</h5>
              <b-form-group class="radio">
                <b-form-radio-group size="lg">
                  <b-form-radio name="some-radios" value="A">Yes</b-form-radio>
                  <b-form-radio name="some-radios" value="B">No</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
              <b-button variant="outline-success" class="mt-4 mb-4" @click="SecondSubmit">Next</b-button>
            </div>

            <div class="third-step steps text-center card shadow" v-show="third_step">
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

            <div class="fourth-step steps text-center card shadow" v-show="fourth_step">
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

            <div class="fifth-step steps card shadow" v-show="fifth_step">
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

            <div class="sixth-step steps card shadow" v-show="sixth_step">
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
              <b-form class="card shadow">
                <h3>Needed Supplements</h3>
                <div class="mt-3" v-for="values in api_data.data">
                  <h4>For {{ values.diet_id}}</h4>
                  <p>
                    <ul>
                      <li v-for="list in values.supplements" v-html="list">
                        {{ list }}
                      </li>
                    </ul>
                  </p>
                </div>
              </b-form>
            </b-tab>

            <b-tab title="Get Supplements">
              <div class="card shadow">
                <h3 class="pb-3">Location for Supplements</h3>
                <div class="mt-3" v-for="values in pharmacy_list.data">
                  <h4>{{ values.name }}</h4>
                  <p> {{ values.phoneNo }} </p>
                  <p>{{ values.location }}</p>
                </div>
              </div>
            </b-tab>

            <b-tab title="Need a Help?" active>
              <b-form class="card shadow">
                <h3>Recommended Nutritionist</h3>
                <div class="mt-3" v-for="values in doctors.data">
                  <h4>{{ values.name }}</h4>
                  <p> {{ values.affiliation }} </p>
                </div>
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
      pharmacy_list: '',
      doctors: '',
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
    axios.all([
      axios.get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/dietary-supplements'),
      axios.get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/pharmacy-list'),
      axios.get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/doctors-list')
    ])
      .then(
        axios.spread((supplements, pharmacy, doctors) => {
          this.api_data = supplements,
          this.pharmacy_list = pharmacy,
          this.doctors = doctors

        }
        )
      )
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
