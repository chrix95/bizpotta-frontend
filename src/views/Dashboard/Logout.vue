<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name: "Logout",
    beforeMount() {
        this.$store.dispatch("logout");
        this.$router.push({
            name: "Home"
        });
    }
}
</script>
<style lang="">
    
</style>