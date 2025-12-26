<template>
    <button :class="`btn btn-${variant}`" :disabled="isDisabled || isLoading" :type="type"  @click="handleClick">
        <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
        <slot></slot>
    </button>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    variant:{ type: String, default: 'primary'},
    isDisabled: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    type:{ type: String, default: 'button' }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
    if (!props.isDisabled && !props.isLoading) {
        emit('click');
    }
};
</script>