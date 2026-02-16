<template>
  <div class="work-page" ref="workPage">
    <!-- Hero Section with Start Journey Button -->
    <section class="work-hero">
      <div class="hero-content">
        <span class="section-label">Experience</span>
        <h1 class="hero-title">My Journey</h1>
        <p class="hero-subtitle">A timeline of my professional experiences and milestones</p>
        <button @click="scrollToStart" class="start-journey-btn">
          <span>Start Journey</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="timeline-container">
        <!-- The vertical timeline line -->
        <div class="timeline-line"></div>

        <!-- Timeline Item 4 (Most Recent - Top) -->
        <div ref="timelineItem4" class="timeline-item right" :class="{ 'animate-in': isItem4Visible }">
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <span class="timeline-date">Sep 2025 - Jan 2026</span>
              <span class="timeline-type">Internship</span>
            </div>
            <h3 class="timeline-role">Creative Developer</h3>
            <h4 class="timeline-company">Packhouse</h4>
            <p class="timeline-description">
              My final internship where I worked on an XCube experience. I built an engine
              and designed games that could be imported into different styles. Did everything
              from designing the games myself, to programming them, and testing them with
              different groups of people to see what worked.
            </p>
          </div>
        </div>

        <!-- Timeline Item 3 -->
        <div ref="timelineItem3" class="timeline-item left" :class="{ 'animate-in': isItem3Visible }">
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <span class="timeline-date">Feb 2024 - Jul 2024</span>
              <span class="timeline-type">Internship</span>
            </div>
            <h3 class="timeline-role">Simulation Developer</h3>
            <h4 class="timeline-company">Veiligheidsregio Noord-Holland Noord</h4>
            <p class="timeline-description">
              My first internship! I made custom training scenarios for the fire department
              and helped out during the actual trainings. They put me behind the screens to
              control all the NPCs in the simulations. Also did some 3D modeling in Blender,
              though that wasn't really my thing.
            </p>
          </div>
        </div>

        <!-- Timeline Item 2 -->
        <div ref="timelineItem2" class="timeline-item right" :class="{ 'animate-in': isItem2Visible }">
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <span class="timeline-date">Sep 2022 - May 2025</span>
              <span class="timeline-type">Part-time</span>
            </div>
            <h3 class="timeline-role">Store Associate</h3>
            <h4 class="timeline-company">Vomar Voordeelmarkt</h4>
            <p class="timeline-description">
              Started out doing the usual supermarket stuff, but over time I became
              somewhat of an informal team leader. Nothing official, but I had enough
              experience to help out my colleagues when they had questions or needed
              a hand with tasks.
            </p>
          </div>
        </div>

        <!-- Timeline Item 1 (Oldest - Bottom) -->
        <div ref="timelineItem1" class="timeline-item left" :class="{ 'animate-in': isItem1Visible }">
          <div class="timeline-dot">
            <span class="dot-inner"></span>
          </div>
          <div class="timeline-card">
            <div class="card-header">
              <span class="timeline-date">Jul 2018 - Jul 2022</span>
              <span class="timeline-type">Seasonal</span>
            </div>
            <h3 class="timeline-role">Farm Worker</h3>
            <h4 class="timeline-company">Boltha</h4>
            <p class="timeline-description">
              My very first job, started when I was 13. Did a bit of everything really –
              peeling bulbs, working on the land, cleaning, planting. Hard work but it
              taught me a lot about just getting things done.
            </p>
          </div>
        </div>

        <!-- Journey Start Indicator -->
        <div ref="journeyStart" class="journey-start" :class="{ 'animate-in': isJourneyStartVisible }">
          <div class="start-marker">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Journey Begins</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import './work.css'

const workPage = ref(null)
const timelineItem1 = ref(null)
const timelineItem2 = ref(null)
const timelineItem3 = ref(null)
const timelineItem4 = ref(null)
const journeyStart = ref(null)

const isItem1Visible = ref(false)
const isItem2Visible = ref(false)
const isItem3Visible = ref(false)
const isItem4Visible = ref(false)
const isJourneyStartVisible = ref(false)

let observer = null

const scrollToStart = () => {
  if (journeyStart.value) {
    journeyStart.value.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

onMounted(async () => {
  await nextTick()

  // Intersection Observer for animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === timelineItem1.value) {
            isItem1Visible.value = true
          }
          if (entry.target === timelineItem2.value) {
            isItem2Visible.value = true
          }
          if (entry.target === timelineItem3.value) {
            isItem3Visible.value = true
          }
          if (entry.target === timelineItem4.value) {
            isItem4Visible.value = true
          }
          if (entry.target === journeyStart.value) {
            isJourneyStartVisible.value = true
          }
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (timelineItem1.value) {
    observer.observe(timelineItem1.value)
  }
  if (timelineItem2.value) {
    observer.observe(timelineItem2.value)
  }
  if (timelineItem3.value) {
    observer.observe(timelineItem3.value)
  }
  if (timelineItem4.value) {
    observer.observe(timelineItem4.value)
  }
  if (journeyStart.value) {
    observer.observe(journeyStart.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>
