<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './style.css'
import router from './router';


window.localStorage.logIn ? router.push('/') : router.push('/auth')




</script>

<template>
  <div>

    <RouterView />
  </div>
</template>

<style scoped></style>
