import { reactive } from "vue";

export function useRequiredValidator() {
    const errors = reactive({});

    const validateField = (field, value, message) => {
        errors[field] = value.trim() ? "" : message;
        return !errors[field];
        
    };
    return { errors, validateField };
}