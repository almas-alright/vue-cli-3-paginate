<template>
    <li>{{ text }}</li>
</template>

<script>
    export default {
        name: "TestComponent",
        props:['item'],
        data(){
            return { text:this.item }
        }
    }
</script>

<style scoped>

</style>