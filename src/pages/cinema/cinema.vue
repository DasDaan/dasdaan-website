<template>
  <div class="cinema-wrapper">
    <!-- The cinema background image -->
    <div class="cinema-background"></div>
    
    <!-- Border frame around the screen -->
    <div class="screen-border">
      <!-- The screen viewport - clips content to only show within the screen area -->
      <div class="screen-viewport">
        <div class="screen-scroll-content">
          <!-- Netflix-style UI -->
          <div class="netflix-container">
            
            <!-- Cinema Navbar Component -->
            <CinemaNavbar />

            <!-- Hero Section with Featured Content -->
            <section class="cinema-hero-section">
              <div class="hero-background">
                <img :src="fillerImage" alt="Featured" />
                <div class="hero-gradient"></div>
              </div>
              
              <div class="hero-content">
                <div class="series-badge">
                  <span class="netflix-n">C</span>
                  <span class="series-text">SERIES</span>
                </div>
                <h1 class="hero-title">WEDNESDAY</h1>
                <div class="hero-meta">
                  <span>Show</span>
                  <span class="meta-dot">•</span>
                  <span>Fantasy</span>
                  <span class="meta-dot">•</span>
                  <span>2022</span>
                  <span class="meta-dot">•</span>
                  <span>TV-14</span>
                </div>
                <p class="hero-description">
                  Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.
                </p>
              </div>
            </section>

            <!-- Content Rows -->
            <section class="content-rows">
              <!-- Row 1: New Releases -->
              <div class="content-row">
                <h2 class="row-title">New Releases</h2>
                <div class="row-scroll">
                  <div class="content-card" v-for="item in nextWatchItems" :key="item.id">
                    <img :src="fillerImage" :alt="item.title" />
                  </div>
                </div>
              </div>

              <!-- Row 2: Trending Now -->
              <div class="content-row">
                <h2 class="row-title">Trending Now</h2>
                <div class="row-scroll">
                  <div class="content-card" v-for="item in trendingItems" :key="item.id">
                    <img :src="fillerImage" :alt="item.title" />
                  </div>
                </div>
              </div>

              <!-- Row 3: Popular on Cinema -->
              <div class="content-row">
                <h2 class="row-title">Popular on Cinema</h2>
                <div class="row-scroll">
                  <div class="content-card" v-for="item in popularItems" :key="item.id">
                    <img :src="fillerImage" :alt="item.title" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './cinema.css'
import fillerImage from '@/assets/filler.png'
import CinemaNavbar from '@/components/cinema-navbar/CinemaNavbar.vue'

// Sample data for content rows
const nextWatchItems = ref([
  { id: 1, title: 'Stranger Things' },
  { id: 2, title: 'The Crown' },
  { id: 3, title: 'Squid Game' },
  { id: 4, title: 'Bridgerton' },
  { id: 5, title: 'Money Heist' },
  { id: 6, title: 'Dark' },
  { id: 7, title: 'Elite' },
])

const trendingItems = ref([
  { id: 1, title: 'The Witcher' },
  { id: 2, title: 'Ozark' },
  { id: 3, title: 'Cobra Kai' },
  { id: 4, title: 'Lupin' },
  { id: 5, title: 'Emily in Paris' },
  { id: 6, title: 'Arcane' },
  { id: 7, title: 'Alice in Borderland' },
])

const popularItems = ref([
  { id: 1, title: 'Breaking Bad' },
  { id: 2, title: 'Peaky Blinders' },
  { id: 3, title: 'The Queen\'s Gambit' },
  { id: 4, title: 'Narcos' },
  { id: 5, title: 'Black Mirror' },
  { id: 6, title: 'Mindhunter' },
  { id: 7, title: 'Better Call Saul' },
])
</script>
