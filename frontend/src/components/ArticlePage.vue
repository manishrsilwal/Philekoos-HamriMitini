<template>
<div id="app">
  <div class="contents">
    <div class="row">
      <app-header></app-header>

      <div v-for="contents in stories.data">
        <div v-if="contents.story_id == id">
          <div class="row">
            <div class="page-title">
              <h3>{{ contents.title }}</h3>
              <small>{{ contents.author }}</small>
            </div>
          </div>

          <div class="row mt-4" v-if="contents.image">
            <div class="col-6">
              <img :src="'https://hamrimitini.s3-ap-southeast-1.amazonaws.com/stories/' + contents.image" />
            </div>

            <div class="col-6">
              <div class="card">
                <div v-html="contents.description">

                </div>
              </div>
            </div>
          </div>

          <div class="row" v-else>
            <div class="col-12">
              <iframe width="100%" class="pt-3" height="361" :src="contents.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
  name: "Article",
  components:{
    'app-header': AppHeader,
  },

  data() {
    return {
      stories: '',
      id: 0
    }
  },

  mounted () {
    axios.all([
      axios.get(
        'https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/stories-list'),
      // axios.get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/pharmacy-list'),
      // axios.get('https://6vttxpfew0.execute-api.ap-southeast-1.amazonaws.com/development/doctors-list')
    ])
      .then(
        axios.spread((stories) => {
          this.stories = stories
          // this.pharmacy_list = pharmacy,
          // this.doctors = doctors

        }
        )
    )
  },

  created() {
    this.id = this.$route.params.id;
  },

  methods: {
    navigate() {
        router.go(-1);
    }
  }

  // methods:{
  //   ...mapActions(['setToken']),


  // }
};
</script>

<style lang="scss" scoped>
  @import "../css/article.scss";

</style>
