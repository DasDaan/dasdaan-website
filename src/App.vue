<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <NavigationBar />
  <div class="page-wrapper">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <FooterBar />
</template>

<style>
/* Page wrapper needed for proper slide positioning */
.page-wrapper {
  position: relative;
  overflow-x: hidden;
}

/* Fade transition (default) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide from left transition */
.slide-left-enter-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-left-enter-from {
  transform: translateX(-100%);
}

.slide-left-leave-to {
  transform: translateX(100%);
}

/* Slide from right transition */
.slide-right-enter-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-right-leave-active {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.slide-right-enter-from {
  transform: translateX(100%);
}

.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
