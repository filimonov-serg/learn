<template>
    <div class="error-message">{{message}}</div>
</template>

<script>
export default {
    props: {
        message: String,
        default: () => "no message"
    }
}
</script>

<style scoped>
.error-message {
    color: #f00;
    font-size: 18px;
    font-weight: bold;
}
</style>