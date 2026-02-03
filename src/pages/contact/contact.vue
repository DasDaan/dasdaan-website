<template>
  <div class="contact-page">
    <div class="noise-overlay"></div>

    <div class="content-container">
      <div class="script-sheet">
        <div class="scene-header">
          <span>EXT. PORTFOLIO - DAY</span>
          <span class="scene-number">SCENE 1</span>
        </div>

        <div class="action-line">
          The USER approaches the keyboard. They have an idea. A good one.
        </div>

        <form @submit.prevent="handleSubmit" class="script-form">
          <div class="character-cue">
            <input type="text" v-model="form.name" placeholder="YOUR NAME" class="script-input name-input" required />
          </div>

          <div class="parenthetical">
            (excitedly)
          </div>

          <div class="dialogue-block">
            <textarea v-model="form.message"
              placeholder="Hey, I was checking out your work and I wanted to talk about..."
              class="script-input dialogue-input" rows="4" required></textarea>
          </div>

          <div class="action-line">
            They scribble their contact info on a napkin and slide it across the table:
          </div>

          <div class="insert-shot">
            <span class="label">INSERT - EMAIL ADDRESS:</span>
            <input type="email" v-model="form.email" placeholder="email@address.com" class="script-input email-input"
              required />
          </div>

          <div class="transition-to">
            <button type="submit" class="cut-to-button">
              CUT TO: BLACK
            </button>
          </div>
        </form>
      </div>

      <div class="social-footer">
        <a href="#" class="social-link">LN</a>
        <a href="#" class="social-link">GH</a>
        <a href="#" class="social-link">IG</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import './contact.css'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Scene sent:', form.value)
  // Add actual submission logic here
  alert('Scene submitted! (This is a demo)')
}
</script>
