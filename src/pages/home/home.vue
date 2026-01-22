<template>
    <div class="home-container">
        <NavigationBar />
        <div class="home-content">
            <!-- Content will go here in future updates -->
        </div>
    </div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<style scoped>
.home-container {
    min-height: 100vh;
    width: 100%;
    background: url('/sky-background.png');
    background-size: 600px;
    background-repeat: repeat;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
    position: relative;
    overflow: hidden;
}

.home-content {
    padding-top: 28px;
    /* Account for fixed navigation bar */
    min-height: calc(100vh - 28px);
}
</style>
