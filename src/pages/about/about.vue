<template>
  <div class="about-page">
    <!-- Me in a Nutshell Section -->
    <section id="nutshell" class="nutshell-section">
      <!-- Cutout Image -->
      <div class="cutout-image-wrapper">
        <img :src="fillerImage" alt="Me" class="cutout-image" />
      </div>
      
      <!-- Paint Splat Text Container -->
      <div class="splat-container">
        <div class="splat-shape">
          <span class="section-label">Me in a Nut-shell</span>
          <p class="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section id="about" class="intro-section">
      <div 
        ref="introContent" 
        class="intro-content"
        :class="{ 'animate-in': isIntroVisible }"
      >
        <!-- About Me Text with Typing Effect -->
        <div class="about-me-text">
          <span class="section-label">About Me</span>
          <p class="typing-text" :class="{ 'typing': isIntroVisible }">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris.
          </p>
          <p class="typing-text delay-1" :class="{ 'typing': isIntroVisible }">
            When I'm not doing all of that, Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <!-- Bento Box Widgets -->
        <div class="bento-grid">
          <!-- Row 1: Currently Watching, To-Do (2x width), Favorite Games -->
          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">🎬</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Currently Watching</span>
                <span class="bento-title">Lorem Ipsum</span>
              </div>
            </div>
            <div class="bento-image-container">
              <img :src="fillerImage" alt="Watching" class="bento-image" />
            </div>
          </div>

          <div class="bento-item bento-wide">
            <div class="bento-header">
              <span class="bento-icon">📋</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Tasks</span>
                <span class="bento-title">To-Do List</span>
              </div>
            </div>
            <ul class="todo-list">
              <li class="todo-item done">Lorem ipsum dolor</li>
              <li class="todo-item">Consectetur adipiscing</li>
              <li class="todo-item">Sed do eiusmod tempor</li>
              <li class="todo-item">Ut labore et dolore</li>
            </ul>
          </div>

          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">🎮</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Gaming</span>
                <span class="bento-title">Favorite Games</span>
              </div>
            </div>
            <div class="bento-image-grid">
              <img :src="fillerImage" alt="Game 1" class="bento-thumb" />
              <img :src="fillerImage" alt="Game 2" class="bento-thumb" />
              <img :src="fillerImage" alt="Game 3" class="bento-thumb" />
            </div>
          </div>

          <!-- Row 2: Playlist, Snowboarding, Video Making, Traveling -->
          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">🎵</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Music</span>
                <span class="bento-title">Favorite Playlist</span>
              </div>
            </div>
            <div class="bento-image-grid small">
              <img :src="fillerImage" alt="Song 1" class="bento-thumb" />
              <img :src="fillerImage" alt="Song 2" class="bento-thumb" />
              <img :src="fillerImage" alt="Song 3" class="bento-thumb" />
              <img :src="fillerImage" alt="Song 4" class="bento-thumb" />
            </div>
          </div>

          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">📷</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Hobby</span>
                <span class="bento-title">Photography</span>
              </div>
            </div>
            <div class="bento-image-container small">
              <img :src="fillerImage" alt="Snowboarding" class="bento-image" />
            </div>
          </div>

          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">🎥</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Creative</span>
                <span class="bento-title">Video Making</span>
              </div>
            </div>
            <div class="bento-image-container small">
              <img :src="fillerImage" alt="Video Making" class="bento-image" />
            </div>
          </div>

          <div class="bento-item">
            <div class="bento-header">
              <span class="bento-icon">✈️</span>
              <div class="bento-title-group">
                <span class="bento-subtitle">Adventure</span>
                <span class="bento-title">Travel Bucket List</span>
              </div>
            </div>
            <div class="bento-image-container small">
              <img :src="fillerImage" alt="Travel" class="bento-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Backstory Section -->
    <section id="backstory" class="backstory-section">
      <div 
        ref="backstoryContent" 
        class="backstory-content"
        :class="{ 'animate-in': isBackstoryVisible }"
      >
        <div class="backstory-image-wrapper">
          <img :src="fillerImage" alt="Backstory" class="backstory-image" />
        </div>
        <div class="backstory-text">
          <span class="section-label">Backstory</span>
          <p class="backstory-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia 
            odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut fringilla 
            velit fermentum a. Class aptent taciti sociosqu ad litora torquent per 
            conubia nostra, per inceptos himenaeos.
          </p>
          <p class="backstory-paragraph">
            Nulla facilisi. Curabitur dapibus enim sit amet elit pharetra tincidunt 
            feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. 
            Donec sed odio operae, eu vulputate felis rhoncus.
          </p>
        </div>
      </div>
    </section>

    <!-- Interests Section -->
    <section id="interests" class="interests-section">
      <div class="interests-container">
        <span class="section-label interests-title">Interests</span>
        
        <!-- Interest Item 1: Hobbies -->
        <div 
          ref="interest1" 
          class="interest-item"
          :class="{ 'animate-in': isInterest1Visible }"
        >
          <div class="interest-image-wrapper">
            <img :src="fillerImage" alt="Hobbies" class="interest-image" />
          </div>
          <div class="interest-divider"></div>
          <div class="interest-text">
            <h3 class="interest-heading">Hobbies</h3>
            <p class="interest-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>

        <!-- Interest Item 2: Tech -->
        <div 
          ref="interest2" 
          class="interest-item"
          :class="{ 'animate-in': isInterest2Visible }"
        >
          <div class="interest-image-wrapper">
            <img :src="fillerImage" alt="Tech" class="interest-image" />
          </div>
          <div class="interest-divider"></div>
          <div class="interest-text">
            <h3 class="interest-heading">Tech</h3>
            <p class="interest-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia 
              odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut fringilla 
              velit fermentum a. Class aptent taciti sociosqu.
            </p>
          </div>
        </div>

        <!-- Interest Item 3: Videos -->
        <div 
          ref="interest3" 
          class="interest-item"
          :class="{ 'animate-in': isInterest3Visible }"
        >
          <div class="interest-image-wrapper">
            <img :src="fillerImage" alt="Videos" class="interest-image" />
          </div>
          <div class="interest-divider"></div>
          <div class="interest-text">
            <h3 class="interest-heading">Videos</h3>
            <p class="interest-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
              Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl 
              imperdiet. Ut convallis libero in urna ultrices accumsan.
            </p>
          </div>
        </div>

        <!-- Interest Item 4: Skills -->
        <div 
          ref="interest4" 
          class="interest-item"
          :class="{ 'animate-in': isInterest4Visible }"
        >
          <div class="interest-image-wrapper">
            <img :src="fillerImage" alt="Skills" class="interest-image" />
          </div>
          <div class="interest-divider"></div>
          <div class="interest-text">
            <h3 class="interest-heading">Skills</h3>
            <p class="interest-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio 
              operae, eu vulputate felis rhoncus. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="contact" class="contact-cta-section">
      <div class="contact-cta-content">
        <h2 class="contact-cta-title">Contact me</h2>
        <p class="contact-cta-description">Sounds interesting? Contact me!</p>
        <router-link to="/contact" class="contact-cta-button">
          <span>Get in Touch</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import './about.css'
import fillerImage from '@/assets/filler.png'

const introContent = ref(null)
const backstoryContent = ref(null)
const interest1 = ref(null)
const interest2 = ref(null)
const interest3 = ref(null)
const interest4 = ref(null)

const isIntroVisible = ref(false)
const isBackstoryVisible = ref(false)
const isInterest1Visible = ref(false)
const isInterest2Visible = ref(false)
const isInterest3Visible = ref(false)
const isInterest4Visible = ref(false)

let observer = null

onMounted(() => {
  // Intersection Observer for animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === introContent.value) {
            isIntroVisible.value = true
          }
          if (entry.target === backstoryContent.value) {
            isBackstoryVisible.value = true
          }
          if (entry.target === interest1.value) {
            isInterest1Visible.value = true
          }
          if (entry.target === interest2.value) {
            isInterest2Visible.value = true
          }
          if (entry.target === interest3.value) {
            isInterest3Visible.value = true
          }
          if (entry.target === interest4.value) {
            isInterest4Visible.value = true
          }
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (introContent.value) {
    observer.observe(introContent.value)
  }
  if (backstoryContent.value) {
    observer.observe(backstoryContent.value)
  }
  if (interest1.value) {
    observer.observe(interest1.value)
  }
  if (interest2.value) {
    observer.observe(interest2.value)
  }
  if (interest3.value) {
    observer.observe(interest3.value)
  }
  if (interest4.value) {
    observer.observe(interest4.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
