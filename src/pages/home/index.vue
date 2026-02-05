<template>
  <div class="home-container">


    <!-- Header section -->
    <header class="hero-section">
      <h1 class="glitch-text" data-text="DasDaan">DasDaan</h1>
      <p class="tagline">Creative Developer & Designer</p>
    </header>

    <!-- Cards section -->
    <section class="cards-section">
      <div class="cards-container">
        <div v-for="card in cards" :key="card.id" class="card" :data-card-id="card.id" :class="{
          'card-expanded': hoveredCard === card.id,
          'card-collapsed': hoveredCard !== null && hoveredCard !== card.id
        }" :style="{
          '--card-color': card.color,
          '--card-gradient-end': card.gradientEnd
        }" @mouseenter="hoveredCard = card.id" @mouseleave="hoveredCard = null" @click="handleCardClick(card)">
          <!-- Background image layer -->
          <div v-if="card.backgroundImage" class="card-bg-image"
            :style="{ backgroundImage: `url(${card.backgroundImage})` }"></div>

          <!-- Card content -->
          <div class="card-default">

            <h2 class="card-title">{{ card.title }}</h2>
            <p class="home-card-description">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="about-section">
      <div class="about-content">
        <h2 class="about-title">Hello!</h2>
        <div class="about-text">
          <p>
            Welcome to my creative space. This page is a collection of my projects, experiments, and ideas.
            Feel free to look around and explore the cards above to see what I've been building!
          </p>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import './index.css'
import { cardsData } from './cardsData.js'


const router = useRouter()
const cards = ref(cardsData)
const hoveredCard = ref(null)

const handleCardClick = (card) => {
  if (card.route) {
    router.push(card.route)
  }
}
</script>
