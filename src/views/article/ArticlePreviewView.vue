<template>
    <div>
        <h1>Article Detail</h1>

        <div v-if="articleStore.isLoading" class="text-center py-5">
        Loading...
        </div>

        <div v-else-if="articleStore.article" class="row">
            <div class="col-12">
                <div class="card border rounded">
                <img :src="articleStore.article.thumbnail" class="card-img-top" style="height:360px; object-fit:cover;"/>

                <div class="card-body">
                    <h3>{{ articleStore.article.title }}</h3>
                    <p>{{ articleStore.article.content }}</p>

                    <div class="d-flex align-items-center gap-2">
                        <img :src="articleStore.article.creator.avatar" width="40" height="40" class="rounded-circle"/>
                        <span>{{ articleStore.article.creator }}</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <h2 v-else class="text-center text-danger">
            Article not found
        </h2>
    </div>
</template>

<script setup>
    import { onMounted, watch } from "vue";
    import { useRoute } from "vue-router";
    import { useArticleStore } from "@/stores/article";

    const route = useRoute();
    const articleStore = useArticleStore();

    const loadArticle = () => {
    articleStore.fetchArticleById(route.params.id);
    };

    onMounted(loadArticle);

    // handle route param change
    watch(() => route.params.id, loadArticle);
</script>

