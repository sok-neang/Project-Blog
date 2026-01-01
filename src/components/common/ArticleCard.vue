<template>
  <router-link :to="{ name: 'article.preview', params: { id } }" class="text-decoration-none text-dark article-card-link">
    <div class="card rounded h-100 article-card">
      <div class="card-img-wrapper">
        <img :src="thumbnail" alt="Thumbnail" class="card-img-top object-fit-cover" />
        <div class="card-img-overlay-gradient"></div>
      </div>
      <div class="card-body d-flex flex-column p-3">
        <h5 class="card-title fw-bold text-truncate mb-2">{{ title }}</h5>
        <p class="card-text text-muted mb-3 line-clamp-2">{{ plainTextContent }}</p>
        <div class="mt-auto d-flex align-items-center gap-2">
          <img :src="avatar" alt="Creator Avatar" class="rounded-circle" width="32" height="32" />
          <span class="small text-secondary fw-medium">{{ creator.firstName }} {{creator.lastName}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>

import {computed} from 'vue'

//definde props to get data from DashboardView
const props = defineProps({
  id: { type: [Number, String], required: true },
  title: String,
  thumbnail: String,
  avatar: String,
  content: String,
  creator: Object,
});
</script>
