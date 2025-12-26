
<template>
    <div class="admin-layout">
        <Navbar @toggle-sidebar="handleToggleSidebar"></Navbar>
        <Sidebar v-if="isOpen"></Sidebar>
        <!-- Main Content -->
        <main class="content mt-5"  :class="{ expanded: !isOpen }">
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>
import Navbar from '@/components/layout/Navbar.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import { ref } from 'vue';

let isOpen = ref(true);
function handleToggleSidebar() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>
    .admin-layout {
    min-height: 100vh;
    }

    .content {
    margin-left: 250px;
    padding: 1.5rem;
    transition: margin-left 0.3s ease;
    }

    .content.expanded {
    margin-left: 0;
    }
</style>
