<template>
    <div class="preloader">
        <img src="images/icons/loading.gif" alt="spinner">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.preloader {
    align-items: center;
    background: rgba(19, 17, 79, 0.84);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    transition: opacity 0.3s linear;
    width: 100%;
    z-index: 9999;
}
</style>