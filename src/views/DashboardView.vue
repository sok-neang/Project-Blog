<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center mb-4">
          <h2>All Articles</h2>
          <div>
            <base-button @click="createArticle" class="w-100" variant="primary">Create Article</base-button>
          </div>
        </div>
      </div>
      <div>
        <template v-if="articleStore.isLoading">
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="a in 8" :key="a">
              <ArticleCardSkeleton />
            </div>
          </div>
        </template>
        <template v-else>
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-3" v-for="article in articleStore.articles" :key="article.id">
              <ArticleCard 
              :title="article?.title"
              :id="article.id"
              :content="article?.content"
              :thumbnail="article?.thumbnail"
              :avatar="article?.creator.avatar"
              :creator="article?.creator"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
  <script setup>
  import ArticleCard from '@/components/common/ArticleCard.vue';
  import BaseButton from '@/components/ui/base/BaseButton.vue';
  import { useRouter } from 'vue-router';
  import { useArticleStore } from '@/stores/article';
  import { onMounted} from 'vue';
  import ArticleCardSkeleton from '@/components/common/ArticleCardSkeleton.vue';
  const articleStore = useArticleStore();
  const router = useRouter();
  
  const createArticle = () => {
    router.push('/article/create');
  };

  onMounted(async () => {
    await articleStore.fetchArticles();
  })

  //search function
  // const filteredArticles = computed(() => {
  //   if (!articleStore.articles?.length) return [];
  //   const q = search.value.trim().toLowerCase();
  //   if (!q) return articleStore.articles;
  //   return articleStore.articles.filter(a => (a.title || '').toLowerCase().includes(q) || (a.content || '').toLowerCase().includes(q));
  // });
</script>
