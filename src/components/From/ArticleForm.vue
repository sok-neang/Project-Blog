<template>
    <div>
        <form>
            <div class="mb-4">
                <base-input type="email" id="exampleFormControlInput1" placeholder="Title of the article" label="Title*"></base-input>
            </div>
            <div class="mb-4">
                <label for="exampleFormControlInput1" class="form-label fw-medium">Category*</label>
                <select class="form-select" aria-label="Default select example">
                    <option selected disabled>Selete category here</option>
                    <option v-for="category in categoryStore.categories" :key="category.id" :value="category.id">
                        {{category.name}}
                    </option>
                </select>
            </div>
            <div class="mb-4">
                <base-input type="file" id="exampleFormControlInput1" label="Thumbnail*" placeholder="No file chosen"></base-input>
            </div>
            <div class="mb-4">
                <label for="exampleFormControlTextarea1" class="form-label fw-medium">Content*</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write content here..." rows="5"></textarea>
            </div>
        </form>
    </div>
</template>

<script setup>
    import {onMounted} from 'vue'
    import { useCategoryStore } from "../../stores/category";

    const categoryStore = useCategoryStore();
    
    // fetch categories
    onMounted(async () => {
        await categoryStore.fetchCategories();
    })
</script>
