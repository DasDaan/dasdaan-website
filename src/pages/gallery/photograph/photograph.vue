<template>
  <div class="photograph-page">
    <!-- Back button -->
    <button class="back-btn" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      <span>Back to Gallery</span>
    </button>

    <!-- Page Header -->
    <header class="page-header">
      <div class="header-icon">📷</div>
      <h1 class="page-title">Photograph</h1>
      <p class="page-subtitle">Capturing moments through the lens</p>
    </header>

    <!-- Gallery Grid Placeholder -->
    <section class="gallery-grid">
      <div class="gallery-item" v-for="i in 9" :key="i">
        <img :src="photographBackground" alt="Photo" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import './photograph.css'
import photographBackground from '@/assets/home-cards/photograph-fill-background.png'

const router = useRouter()

const goBack = () => {
  router.push('/gallery')
}
</script>
