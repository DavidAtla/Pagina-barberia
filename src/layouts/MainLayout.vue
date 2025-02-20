<template>
  <q-layout view="hHh LpR fff">
    <HeaderComponent />
    <q-page-container class="borde-rojo full-height" style="position: relative">
      <router-view />
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script setup>
import HeaderComponent from 'src/components/HeaderComponent.vue'
import FooterComponent from 'src/components/FooterComponent.vue'
</script>

<style>
.borde-rojo {
  border: 1px solid red;
}
</style>
