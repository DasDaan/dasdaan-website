<template>
  <div class="photoshop-page">
    <!-- Back button -->
    <button class="back-btn" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
      <span>Back to Gallery</span>
    </button>

    <!-- Page Header -->
    <header class="page-header">
      <div class="header-icon">🎨</div>
      <h1 class="page-title">Photoshop</h1>
      <p class="page-subtitle">Digital art and creative designs</p>
    </header>

    <!-- Gallery Grid Placeholder -->
    <section class="gallery-grid">
      <div class="gallery-item" v-for="i in 9" :key="i">
        <img :src="fillerImage" alt="Artwork" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import './photoshop.css'
import fillerImage from '@/assets/filler.png'

const router = useRouter()

const goBack = () => {
  router.push('/gallery')
}
</script>
