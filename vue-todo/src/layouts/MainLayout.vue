<template>
  <div class="main-layout">
    <Navbar/>
    <h2 class="page-title">
        {{$route.meta.title}}
    </h2>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "MainLayout",
  components: {
    Navbar
  }
};
</script>
