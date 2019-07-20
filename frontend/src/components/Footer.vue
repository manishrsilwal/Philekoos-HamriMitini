<template>
<div id="app">
  <div class="contents footer">
    <div class="row">
      <!-- Copyright Text -->
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "Footer",
  components:{
  },

  data() {
    return {
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
  @import "../css/footer.scss";

</style>
