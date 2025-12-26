<template>
    <div>
        <label v-if="label" :for="id" class="form-label">{{label}}</label>
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