<template>
    <div>
        <label v-if="label" :for="id" class="form-label fw-semibold">{{label}}</label>
        <input :id="id" :type="type" :placeholder="placeholder" :value="modelValue" :disabled="disable" class="form-control" 
        :class="{ 'is-invalid': error }" @input="updateValue" />
        <div v-if="error" class="invalid-feedback">{{error}}</div>
    </div>
</template>
<script setup>
    const props = defineProps({
        modelValue: [String, Number],
        label: { type: String, default: '' },
        placeholder: String,
        id: { type: String, default: '' },
        error: { type: String, default: '' },
        type: { type: String, default: 'text' },
        error: String,
        disable:{ type: Boolean, default: false }
    });

    const emit = defineEmits(['update:modelValue']);
    function updateValue(event) {
        emit('update:modelValue', event.target.value);
    }
</script>

<style scoped>
    .form-control.is-invalid{
    border-color: var(--bs-form-invalid-border-color);
    padding-right: calc(1.5em + .75rem);
    background: none !important;
    background-repeat: no-repeat;
    background-position: right calc(.375em + .1875rem) center;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }
</style>