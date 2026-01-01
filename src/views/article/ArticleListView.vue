<template>
    <div>
        <div class="d-flex justify-content-between mb-5">
            <h1>All Articles</h1>
            <base-button @click="gotoCreateArticle">Create Article</base-button>
        </div>
        <div class="d-flex justify-content-between">
            <BaseTable :columns="columns" :items="articleStore.my_article" :isLoading="loading" >
                <template #column-name="{item}">
                    <span class="fw-medium">{{item.title}}</span>
                </template>
                <template #column-category="{item}">
                    <span>{{ item.category ? item.category.name : '' }}</span>
                </template>
            </BaseTable>
        </div>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'
    import {useRouter} from 'vue-router'
    import {useArticleStore} from "../../stores/article"

    const articleStore = useArticleStore();
    const router = useRouter();
    const loading = ref(false)

    function gotoCreateArticle(){
        router.push({name: 'article.create'})
    }

    onMounted(async () => {
        await articleStore.fetchArticleOwnArticle();
    })

    const columns = ref([
        {key: "id", label: "ID"},
        {key: "title", label: "Title"},
        {key: "category", label: "Category"},
        {key: "content", label: "Content"},

    ])
</script>
