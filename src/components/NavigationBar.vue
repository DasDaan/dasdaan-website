<template>
    <nav class="navigation-bar">
        <div class="nav-menu">
            <div v-for="item in menuItems" :key="item" class="nav-item" @click="handleMenuClick(item)">
                {{ item }}
            </div>
        </div>
        <div class="nav-right">
            <div class="nav-time">{{ currentTime }}</div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const menuItems = ['SETTINGS', 'FILE', 'EDIT', 'VIEW', 'WINDOW', 'HELP'];
const currentTime = ref('');

let timeInterval = null;

const updateTime = () => {
    const now = new Date();
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;

    currentTime.value = `${day} ${month} ${date} ${displayHours}:${minutes} ${ampm}`;
};

const handleMenuClick = (item) => {
    console.log(`Clicked: ${item}`);
    // You can add functionality here later
};

onMounted(() => {
    updateTime();
    timeInterval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
    if (timeInterval) {
        clearInterval(timeInterval);
    }
});
</script>

<style scoped>
.navigation-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 28px;
    background: linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 100%);
    border-bottom: 2px solid #404040;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    z-index: 1000;
    font-family: 'Press Start 2P', 'Courier New', monospace;
    font-size: 11px;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
}

.nav-menu {
    display: flex;
    gap: 20px;
    align-items: center;
}

.nav-item {
    color: #1a1a1a;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 2px;
    transition: background-color 0.1s;
    user-select: none;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nav-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.nav-item:active {
    background-color: rgba(0, 0, 0, 0.2);
}

.nav-right {
    display: flex;
    align-items: center;
}

.nav-time {
    color: #1a1a1a;
    font-size: 10px;
    letter-spacing: 1px;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid #999;
    border-radius: 2px;
}
</style>
