<template>
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center vh-100">
            <div class="col-5">
                <div class="card p-5 shadow">
                    <h2 class="text-center">Login</h2>
                    <form @submit.prevent="handleSubmit">
                        <div class="mb-3">
                            <base-input :error="errors.email" id="email" type="email" v-model="email" label="Email address" placeholder="Enter email" @input="validateEmail"></base-input>
                        </div>
                        <div class="mb-3 position-relative">
                            <base-input :type="passwordVisible ? 'text' : 'password'" v-model="password" label="Password" placeholder="Password" @input="validatePassword"></base-input>
                            <i :class="passwordVisible? 'bi bi-eye': 'bi bi-eye-slash'" @click="showPassword" style="position: absolute; top: 70%; right: 10px; transform: translateY(-50%); cursor: pointer;"></i>
                        </div>
                        <base-button :error="errors.password" id="pass" class="w-100" type="submit" variant="primary" :isLoading="loading">Submit</base-button>
                        <a href="" class="d-block text-center mt-3 text-decoration-none">forgote password? sing Up</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';
    import { useRequiredValidator } from '../../composables/useRequiredValidator';
    const authStore = useAuthStore();
    const router = useRouter();
    const {errors, validateField} = useRequiredValidator();

    const loading = ref(false);
    const email = ref('');
    const password = ref('');

    const isLoading = ref(false);
    const showPass = ref(false);
    const togglePassword = () => (showPass.value = !showPass.value); 

    const validateEmail = () => {
        validateField('email', email.value, 'error');
    };
    const validatePassword = () => {
        validateField('password', password.value, 'error');
    };

    const validateForm = () => {
        let isValid = true;
        if(!validateEmail() || !validatePassword()) {
            isValid = false;
        }
        return isValid;
    }

    let passwordVisible = ref(false);
    function showPassword() {
        passwordVisible.value = !passwordVisible.value;
    }


    async function handleSubmit(e) {
        if(!validateForm()) {
            return;
        }

        try {
            loading.value = true; 
            await authStore.login({
                email: email.value,
                password: password.value
        });
        router.push({name: 'dashboard'});
        }catch(err){
            console.log(err);
        }
        finally{
            loading.value = false; 
        }
    }
</script>
