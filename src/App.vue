<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <NavigationBar />
  <router-view />
  <FooterBar />
</template>
