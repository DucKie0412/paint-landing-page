export function formDataToJson(formData) {
    return Object.fromEntries(formData.entries());
}