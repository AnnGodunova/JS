<template>
  <div id="nav">
    <div class="link-wrapper">
        <div class="nav-links">
            <router-link class="nav-link" exact to="/">Список дел</router-link>
            <router-link class="nav-link" to="/info">Информация</router-link>
        </div>
        <a @click="onLogoutClicked" class="logout nav-link">Выйти</a>
    </div>
  </div>
</template>

<script>
import {doLogoutClicked} from '@/netClient/authService';
export default {
    name: 'Navbar',
    methods: {
        async onLogoutClicked (){
            try{
                await doLogoutClicked();
                this.$router.push ('/login');
            } catch(error){
                console.error({error});
            }
        },
    },
};
</script>