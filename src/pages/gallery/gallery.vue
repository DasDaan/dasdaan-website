<template>
  <div class="gallery-wrapper">
    <div class="gallery-cards-container">
      <!-- Photograph Card (Left) -->
      <div class="gallery-card photograph-card">
        <div class="card-image-section">
          <img :src="photographBackground" alt="Photography" class="card-image" />
        </div>
        <div class="card-text-section photograph-text">
          <div class="card-text-content align-left">
            <h2 class="card-title">Photograph</h2>
            <p class="card-description">Capturing moments through the lens</p>
          </div>
          <button class="card-btn btn-left" @click="navigateTo('photograph', 'left')">
            <span>View Gallery</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Photoshop Card (Right) -->
      <div class="gallery-card photoshop-card">
        <div class="card-image-section">
          <img :src="fillerImage" alt="Photoshop" class="card-image" />
        </div>
        <div class="card-text-section photoshop-text">
          <div class="card-text-content align-right">
            <h2 class="card-title">Photoshop</h2>
            <p class="card-description">Digital art and creative designs</p>
          </div>
          <button class="card-btn btn-right" @click="navigateTo('photoshop', 'right')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>View Gallery</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import './gallery.css'
import photographBackground from '@/assets/home-cards/photograph-fill-background.png'
import fillerImage from '@/assets/filler.png'

const router = useRouter()

const navigateTo = (page, direction) => {
  // Navigate with the transition defined in router meta
  router.push({
    path: `/gallery/${page}`
  })
}
</script>
