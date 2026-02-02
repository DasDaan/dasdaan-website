<template>
  <div class="projects-page">
    <!-- Page Header -->
    <header class="projects-header">
      <h1 class="projects-title">Projects</h1>
      <p class="projects-subtitle">A collection of my creative projects.</p>
    </header>

    <!-- Projects Grid -->
    <div class="projects-grid">
      <!-- Project Card 1 -->
      <article class="project-card" v-for="project in projects" :key="project.id">
        <div class="card-main">
          <!-- Project Image -->
          <div class="project-image-wrapper">
            <img 
              :src="project.image" 
              :alt="project.name" 
              class="project-image"
            />
          </div>
          
          <!-- Project Info -->
          <div class="project-info">
            <h2 class="project-name">{{ project.name }}</h2>
            <p class="project-description">{{ project.description }}</p>
            
            <!-- Feature List - Steam Style -->
            <div class="feature-list">
              <div class="feature-item" v-for="(feature, index) in project.features" :key="index">
                <span class="feature-icon" v-html="feature.icon"></span>
                <span class="feature-text">{{ feature.text }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Card Footer -->
        <div class="card-footer">
          <div class="project-tags">
            <span class="project-tag" v-for="(tag, index) in project.tags" :key="index">
              {{ tag }}
            </span>
          </div>
          <div class="card-actions">
            <a 
              v-if="project.githubUrl" 
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="github-btn"
              aria-label="View on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <button class="view-project-btn">View Project</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './projects.css'
import fillerImage from '@/assets/filler.png'

// SVG Icons for features
const icons = {
  twitch: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,
  obs: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5zm0 15.75a5.25 5.25 0 100-10.5 5.25 5.25 0 000 10.5z"/></svg>`,
  api: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>`,
  realtime: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
  controller: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
  video: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
  automation: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`
}

// Sample projects data
const projects = ref([
  {
    id: 1,
    name: 'Stream Command Center',
    description: 'A powerful dashboard for managing live streams with real-time chat integration and automated moderation tools.',
    image: fillerImage,
    tags: ['Vue.js', 'Node.js', 'WebSocket'],
    githubUrl: 'https://github.com/DasDaan/stream-command-center',
    features: [
      { icon: icons.twitch, text: 'Twitch Integration' },
      { icon: icons.obs, text: 'OBS Integration' },
      { icon: icons.realtime, text: 'Real-time Updates' },
      { icon: icons.automation, text: 'Automated Moderation' }
    ]
  },
  {
    id: 2,
    name: 'Video Production Suite',
    description: 'Professional video editing workflow automation with cloud rendering and collaborative features.',
    image: fillerImage,
    tags: ['Python', 'FFmpeg', 'Cloud'],
    githubUrl: 'https://github.com/DasDaan/video-production-suite',
    features: [
      { icon: icons.video, text: 'Video Processing' },
      { icon: icons.cloud, text: 'Cloud Rendering' },
      { icon: icons.api, text: 'REST API' },
      { icon: icons.controller, text: 'Remote Control' }
    ]
  }
])
</script>
