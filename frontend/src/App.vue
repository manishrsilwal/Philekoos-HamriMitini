<template>
<div id="app">

  <!-- <div class="" v-show="auth">
    <router-view></router-view>
  </div>
  <div class="" v-show="!auth">
      <login-page></login-page>
  </div> -->
<router-view></router-view>
<!-- <index-page></index-page> -->
</div>
</template>

<script>

export default {
  name: "app",
  components:{
  },
  data() {
    return {
      // 'auth': true
    }
  },
  mounted: function() {
    // if (this.$store.state.token == "") {
    //   // this.$router.replace("/");
    //   // show login page
    //   this.auth;
    // }else{
    //   // show authenticated area
    //   this.auth = !this.auth;
    //   // this.$router.replace({name:"adminpage"});
    // }
  }
};
</script>
