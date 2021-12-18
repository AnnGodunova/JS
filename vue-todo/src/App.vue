<template>
  <div id="app">
    <component :is="layout"> 
      <router-view/> 
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout, AuthLayout
  },
  computed:{
    layout(){
      return this.$route.meta?.layout || 'main-layout'
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img.logo {
  width: 250px;
  height: 250px;
  margin: 10px
}
label.heading {
  width: 80px;
  font-weight: bold;
  text-align: right;
}
textarea {
  margin: 8px 0 auto;
  width: 304px;
  height: 92px;
  resize: none;
  border-radius: 12px;
  background-color: rgb(236, 234, 234);
  border: rgb(236, 234, 234);
  box-shadow: 4px 4px 4px 0px grey;
}

</style>
