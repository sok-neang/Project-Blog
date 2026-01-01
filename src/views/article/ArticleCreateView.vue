<template>
    <div>
        <h1>Create Article</h1>
        <ArticleForm></ArticleForm>
        <div class="d-flex justify-content-between">
            <base-button variant="outline-primary">Back</base-button>
            <base-button>Publish Now</base-button>
        </div>
    </div>
</template>

<script setup>
    import ArticleForm from "../../components/From/ArticleForm.vue"
</script>

