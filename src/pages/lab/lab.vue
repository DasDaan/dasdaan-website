<template>
  <div class="lab-page" ref="labPage">
    <!-- Page Header -->
    <header class="lab-header">
      <h1 class="lab-title">Lab</h1>
      <p class="lab-subtitle">Experimental projects, prototypes, and creative explorations</p>
    </header>

    <!-- Lab Grid Section -->
    <section class="lab-grid-section">
      <div class="lab-grid">
        <!-- Project Card 1 -->
        <div ref="project1" class="lab-card" :class="{ 'animate-in': isProject1Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Prototype</span>
              <span class="lab-date">2024</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 1</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>

        <!-- Project Card 2 -->
        <div ref="project2" class="lab-card" :class="{ 'animate-in': isProject2Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Concept</span>
              <span class="lab-date">2024</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 2</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>

        <!-- Project Card 3 -->
        <div ref="project3" class="lab-card" :class="{ 'animate-in': isProject3Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Experiment</span>
              <span class="lab-date">2023</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 3</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>

        <!-- Project Card 4 -->
        <div ref="project4" class="lab-card" :class="{ 'animate-in': isProject4Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Prototype</span>
              <span class="lab-date">2023</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 4</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>

        <!-- Project Card 5 -->
        <div ref="project5" class="lab-card" :class="{ 'animate-in': isProject5Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Concept</span>
              <span class="lab-date">2023</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 5</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>

        <!-- Project Card 6 -->
        <div ref="project6" class="lab-card" :class="{ 'animate-in': isProject6Visible }">
          <div class="lab-card-image">
            <div class="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
          </div>
          <div class="lab-card-content">
            <div class="lab-card-header">
              <span class="lab-tag">Experiment</span>
              <span class="lab-date">2022</span>
            </div>
            <h3 class="lab-card-title">Experimental Project 6</h3>
            <p class="lab-card-description">
              A brief description of this experimental project and what it explores.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import './lab.css'

const labPage = ref(null)
const project1 = ref(null)
const project2 = ref(null)
const project3 = ref(null)
const project4 = ref(null)
const project5 = ref(null)
const project6 = ref(null)

const isProject1Visible = ref(false)
const isProject2Visible = ref(false)
const isProject3Visible = ref(false)
const isProject4Visible = ref(false)
const isProject5Visible = ref(false)
const isProject6Visible = ref(false)

let observer = null

onMounted(async () => {
  await nextTick()

  // Intersection Observer for animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === project1.value) {
            isProject1Visible.value = true
          }
          if (entry.target === project2.value) {
            isProject2Visible.value = true
          }
          if (entry.target === project3.value) {
            isProject3Visible.value = true
          }
          if (entry.target === project4.value) {
            isProject4Visible.value = true
          }
          if (entry.target === project5.value) {
            isProject5Visible.value = true
          }
          if (entry.target === project6.value) {
            isProject6Visible.value = true
          }
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  if (project1.value) observer.observe(project1.value)
  if (project2.value) observer.observe(project2.value)
  if (project3.value) observer.observe(project3.value)
  if (project4.value) observer.observe(project4.value)
  if (project5.value) observer.observe(project5.value)
  if (project6.value) observer.observe(project6.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>