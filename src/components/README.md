# Component Structure

## NavigationBar Component

The `NavigationBar.vue` component is a **reusable navigation bar** designed to match the retro pixelated OS aesthetic.

### Location

`src/components/NavigationBar.vue`

### Features

- Pixelated retro OS-style menu bar
- Menu items: SETTINGS, FILE, EDIT, VIEW, WINDOW, HELP
- Real-time clock display (updates every second)
- Click handlers for menu items (ready for future functionality)
- Fixed position at top of page

### Usage

```vue
<template>
  <div>
    <NavigationBar />
    <!-- Your content here -->
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
</script>
```

### Customization

You can modify the menu items by changing the `menuItems` array in the component:

```javascript
const menuItems = ["SETTINGS", "FILE", "EDIT", "VIEW", "WINDOW", "HELP"];
```

### Styling

The component uses:

- Press Start 2P font (pixelated retro font)
- Gradient background (#e8e8e8 to #d0d0d0)
- Pixelated image rendering
- Fixed height of 28px

The navigation bar is **fully responsive** and **reusable** across all pages!
