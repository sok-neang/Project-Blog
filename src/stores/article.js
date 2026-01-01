import { ref, computed } from "vue";
import { defineStore } from "pinia";
import api from "@/api/api";

export const useArticleStore = defineStore ('article',() =>{
    const articles = ref([]);
    const my_article = ref([])
    const article = ref(null)
    const isLoading = ref(false);
    const myLoading = ref(false);

    const fetchArticles = async () =>{
        try{
            isLoading.value = true;
            const res = await api.get("/articles");
            articles.value = res.data.data.items;
        }catch(err){
            console.log(err);
        }
        finally{
            isLoading.value = false;
        }
    }

    const fetchArticleById = async (id) => {
        try {
            isLoading.value = true;
            const res = await api.get(`/articles/${id}`);
            article.value = res.data.data;
        } catch (err) {
            console.error("Error fetching article:", err);
        } finally {
            isLoading.value = false;
        }
    };

    const fetchArticleOwnArticle = async () => {
        try {
            myLoading.value = true;
            const res = await api.get(`/articles/own`);
            my_article.value = res.data.data.items;
            console.log(my_article.value)
        } catch (err) {
            console.error("Error fetching article:", err);
        } finally {
            myLoading.value = false;
        }
    };


    return {
        articles,
        article,
        isLoading,
        my_article,
        myLoading,
        fetchArticles,
        fetchArticleById,
        fetchArticleOwnArticle
    }
})