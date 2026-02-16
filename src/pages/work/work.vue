<template>
  <div class="work-page">
    <!-- Hero Section -->
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
        <!-- Central timeline line -->
        <div class="timeline-line"></div>

        <!-- Render year markers and events -->
        <template v-for="(item, index) in timelineItems" :key="index">

          <!-- Year Marker -->
          <div
            v-if="item.type === 'year'"
            class="year-marker"
            :ref="el => setRef(el, index)"
            :class="{ 'animate-in': visibleItems[index] }"
          >
            <span class="year-label">{{ item.year }}</span>
          </div>

          <!-- START Event (full card) -->
          <div
            v-else-if="item.type === 'start'"
            class="timeline-event"
            :class="[item.side, { 'animate-in': visibleItems[index] }]"
            :ref="el => setRef(el, index)"
            @mouseenter="highlightedJobId = item.job.id"
            @mouseleave="highlightedJobId = null"
          >
            <div class="event-dot dot-start" :class="'dot-' + item.job.colorClass">
              <span class="dot-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </span>
              <span class="connector" :class="'conn-' + item.job.colorClass"></span>
            </div>

            <div class="event-card start-card" :class="['card-' + item.job.colorClass, { 'pair-highlight': highlightedJobId === item.job.id }]">
              <div class="card-meta">
                <span class="event-month">{{ item.monthLabel }}</span>
                <span class="event-badge badge-started" :class="'badge-' + item.job.colorClass">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Started
                </span>
                <span class="event-type-tag">{{ item.job.type }}</span>
              </div>
              <h3 class="card-role">{{ item.job.role }}</h3>
              <h4 class="card-company">{{ item.job.company }}</h4>
              <p class="card-description">{{ item.job.description }}</p>
            </div>
          </div>

          <!-- END Event (compact marker) -->
          <div
            v-else-if="item.type === 'end'"
            class="timeline-event"
            :class="[item.side, { 'animate-in': visibleItems[index] }]"
            :ref="el => setRef(el, index)"
            @mouseenter="highlightedJobId = item.job.id"
            @mouseleave="highlightedJobId = null"
          >
            <div class="event-dot dot-end" :class="'dot-' + item.job.colorClass">
              <span class="dot-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span class="connector" :class="'conn-' + item.job.colorClass"></span>
            </div>

            <div class="event-card end-card" :class="['card-' + item.job.colorClass, { 'pair-highlight': highlightedJobId === item.job.id }]">
              <div class="card-meta">
                <span class="event-month">{{ item.monthLabel }}</span>
                <span class="event-badge badge-completed">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Completed
                </span>
              </div>
              <div class="end-card-info">
                <span class="end-role">{{ item.job.role }}</span>
                <span class="end-sep">·</span>
                <span class="end-company">{{ item.job.company }}</span>
                <span class="end-sep">·</span>
                <span class="end-duration">{{ item.job.durationText }}</span>
              </div>
            </div>
          </div>

        </template>

        <!-- Journey Start Indicator -->
        <div
          ref="journeyStartRef"
          class="journey-start"
          :class="{ 'animate-in': isJourneyStartVisible }"
        >
          <div class="start-marker">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
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
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import './work.css'

const journeyStartRef = ref(null)
const isJourneyStartVisible = ref(false)
const highlightedJobId = ref(null)

const jobs = [
  {
    id: 'boltha',
    role: 'Farm Worker',
    company: 'Boltha',
    type: 'Seasonal',
    colorClass: 'seasonal',
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2022, 6, 1),
    startMonth: 'Jul 2018',
    endMonth: 'Jul 2022',
    durationText: '4 years',
    description: 'My very first job, started when I was 13. Did a bit of everything really – peeling bulbs, working on the land, cleaning, planting. Hard work but it taught me a lot about just getting things done.'
  },
  {
    id: 'vomar',
    role: 'Store Associate',
    company: 'Vomar Voordeelmarkt',
    type: 'Part-time',
    colorClass: 'parttime',
    startDate: new Date(2022, 8, 1),
    endDate: new Date(2025, 4, 1),
    startMonth: 'Sep 2022',
    endMonth: 'May 2025',
    durationText: '2 yrs 8 mos',
    description: 'Started out doing the usual supermarket stuff, but over time I became somewhat of an informal team leader. Nothing official, but I had enough experience to help out my colleagues when they had questions or needed a hand with tasks.'
  },
  {
    id: 'veiligheidsregio',
    role: 'Simulation Developer',
    company: 'Veiligheidsregio Noord-Holland Noord',
    type: 'Internship',
    colorClass: 'internship',
    startDate: new Date(2024, 1, 1),
    endDate: new Date(2024, 6, 1),
    startMonth: 'Feb 2024',
    endMonth: 'Jul 2024',
    durationText: '5 months',
    description: 'My first internship! I made custom training scenarios for the fire department and helped out during the actual trainings. They put me behind the screens to control all the NPCs in the simulations. Also did some 3D modeling in Blender, though that wasn\'t really my thing.'
  },
  {
    id: 'packhouse',
    role: 'Creative Developer',
    company: 'Packhouse',
    type: 'Internship',
    colorClass: 'internship',
    startDate: new Date(2025, 8, 1),
    endDate: new Date(2026, 0, 1),
    startMonth: 'Sep 2025',
    endMonth: 'Jan 2026',
    durationText: '5 months',
    description: 'My final internship where I worked on an XCube experience. I built an engine and designed games that could be imported into different styles. Did everything from designing the games myself, to programming them, and testing them with different groups of people to see what worked.'
  }
]

// Build timeline: year markers (all years) interleaved with start/end events
const timelineItems = computed(() => {
  // Create and sort events (newest first)
  const events = []
  jobs.forEach(job => {
    events.push({ type: 'start', date: job.startDate, monthLabel: job.startMonth, job })
    events.push({ type: 'end',   date: job.endDate,   monthLabel: job.endMonth,   job })
  })
  events.sort((a, b) => b.date - a.date)
  events.forEach((ev, i) => { ev.side = i % 2 === 0 ? 'right' : 'left' })

  // Group events by year
  const eventsByYear = {}
  events.forEach(ev => {
    const year = ev.date.getFullYear()
    if (!eventsByYear[year]) eventsByYear[year] = []
    eventsByYear[year].push(ev)
  })

  // Build items: every year from 2026→2018, with events underneath
  const items = []
  for (let year = 2026; year >= 2018; year--) {
    items.push({ type: 'year', year })
    if (eventsByYear[year]) {
      eventsByYear[year].forEach(ev => items.push(ev))
    }
  }
  return items
})

// Scroll-triggered animations
const itemRefs = ref({})
const visibleItems = ref({})

const setRef = (el, index) => {
  if (el) itemRefs.value[index] = el
}

const scrollToStart = () => {
  journeyStartRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

let observer = null

onMounted(async () => {
  await nextTick()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        Object.entries(itemRefs.value).forEach(([index, el]) => {
          if (entry.target === el) visibleItems.value[index] = true
        })
        if (entry.target === journeyStartRef.value) {
          isJourneyStartVisible.value = true
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  Object.values(itemRefs.value).forEach(el => {
    if (el) observer.observe(el)
  })
  if (journeyStartRef.value) observer.observe(journeyStartRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>
