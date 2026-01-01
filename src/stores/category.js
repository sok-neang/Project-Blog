import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/api/api";

export const useCategoryStore = defineStore("category", () => {
    const categories = ref([]);
    const loading = ref(false);

    const fetchCategories = async () => {
        loading.value = true;
        try {
            const res = await api.get('/categories');
            const data = res.data.data;
            categories.value = data.items;
        } catch (err) {
            console.error('Error fetching categories:', err);
        } finally {
            loading.value = false;
        }
    };

    return {
        categories,
        loading,
        fetchCategories,
    };
});
