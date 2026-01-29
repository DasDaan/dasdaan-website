<template>
  <div class="home-container">
    <!-- Pixelated background effect -->
    <div class="pixel-bg"></div>
    
    <!-- Header section -->
    <header class="hero-section">
      <h1 class="glitch-text" data-text="DasDaan">DasDaan</h1>
      <p class="tagline">Creative Developer & Designer</p>
    </header>

    <!-- Cards section -->
    <section class="cards-section">
      <div class="cards-container">
        <div
          v-for="card in cards"
          :key="card.id"
          class="card"
          :data-card-id="card.id"
          :class="{ 
            'card-expanded': hoveredCard === card.id,
            'card-collapsed': hoveredCard !== null && hoveredCard !== card.id 
          }"
          :style="{
            '--card-color': card.color,
            '--card-gradient-end': card.gradientEnd
          }"
          @mouseenter="hoveredCard = card.id"
          @mouseleave="hoveredCard = null"
          @click="handleCardClick(card)"
        >
          <!-- Background image layer -->
          <div 
            v-if="card.backgroundImage" 
            class="card-bg-image"
            :style="{ backgroundImage: `url(${card.backgroundImage})` }"
          ></div>
          
          <!-- Card content -->
          <div class="card-default">
            <span class="card-icon">{{ card.icon }}</span>
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="about-section">
      <div class="about-content">
        <h2 class="about-title">Welcome to My Creative Space</h2>
        <div class="about-text">
          <p>
            Hey there! I'm <span class="highlight">Daan</span>, a passionate creative developer and designer 
            who loves bringing ideas to life through code and design. This site is my showcase of projects, experiments, and creative explorations I made.
          </p>
          <p>
            From interactive development to video production, photography to experimental coding projects. 
            I'm always exploring new ways to create. Feel free to explore the different 
            sections above to discover what I've been working on!
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-item">
            <span class="stat-number">8</span>
            <span class="stat-label">Categories</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">∞</span>
            <span class="stat-label">Ideas</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">1</span>
            <span class="stat-label">Passion</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import './index.css'
import { cardsData } from './cardsData.js'
import FooterBar from '@/components/FooterBar.vue'

const router = useRouter()
const cards = ref(cardsData)
const hoveredCard = ref(null)

const handleCardClick = (card) => {
  if (card.route) {
    router.push(card.route)
  }
}
</script>
