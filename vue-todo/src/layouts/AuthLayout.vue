<template>
    
    <div class="auth-layout">
        <h2 class="page-title">
            {{$route.meta.title}}
        </h2>
        <div class="page-container">
            <router-view/>
        </div>
    </div>

</template>

<script>
export default {
    name: 'AuthLayout'
}
</script>
