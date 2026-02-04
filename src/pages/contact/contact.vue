<template>
  <div class="contact-editorial-wrapper">
    <div class="contact-editorial-container">
      
      <!-- Left Panel: Editorial/Visual -->
      <div class="editorial-panel">
        <div class="editorial-content">
          <span class="editorial-label">Contact</span>
          <h1 class="editorial-title">Let's start a <br><em>conversation</em></h1>
          <p class="editorial-subtitle">
            Have a project in mind? We'd love to hear about it.
            Send us a message and we'll get back to you as soon as possible.
          </p>
          
          <div class="editorial-contact-details">
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <a href="mailto:hello@dasdaan.com" class="detail-link">hello@dasdaan.com</a>
            </div>
            <div class="detail-item">
              <span class="detail-label">Socials</span>
              <div class="editorial-socials">
                <a href="#" class="social-text-link">LinkedIn</a>
                <span class="separator">•</span>
                <a href="#" class="social-text-link">GitHub</a>
                <span class="separator">•</span>
                <a href="#" class="social-text-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Background decoration -->
        <div class="editorial-bg-decoration"></div>
      </div>

      <!-- Right Panel: Form -->
      <div class="form-panel">
        <form @submit.prevent="handleSubmit" class="editorial-form">
          <div class="form-decoration-top"></div>
          
          <div class="input-group" :class="{ 'has-content': form.name }">
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              required 
            />
            <label for="name">Your Name</label>
            <div class="input-border"></div>
          </div>

          <div class="input-group" :class="{ 'has-content': form.email }">
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              required 
            />
            <label for="email">Email Address</label>
            <div class="input-border"></div>
          </div>

          <div class="input-group" :class="{ 'has-content': form.message }">
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="1"
              @input="autoResize"
              ref="messageInput"
              required
            ></textarea>
            <label for="message">Tell us about your project</label>
            <div class="input-border"></div>
          </div>

          <button type="submit" class="submit-btn-fancy">
            <span class="btn-text">Send Message</span>
            <span class="btn-line"></span>
            <span class="btn-icon">→</span>
          </button>
        </form>
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

const messageInput = ref(null)

const autoResize = () => {
  const textarea = messageInput.value
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

const handleSubmit = () => {
  console.log('Editorial Form Submitted:', form.value)
  // Simulate sending
  const btn = document.querySelector('.submit-btn-fancy')
  btn.classList.add('sending')
  
  setTimeout(() => {
    btn.classList.remove('sending')
    btn.classList.add('sent')
    alert('Message sent beautifully.')
    
    // Reset
    form.value = { name: '', email: '', message: '' }
    if(messageInput.value) messageInput.value.style.height = 'auto'
  }, 1500)
}
</script>
