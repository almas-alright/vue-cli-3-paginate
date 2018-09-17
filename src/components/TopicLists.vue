<template>
    <div id="topics-list">
        <ul>
            <test-component v-for="topic in topics" :item="topic" ></test-component>
        </ul>
        <h4 v-text="listSize"></h4>
        <hr>
        <input type="text" v-model="tItem"> <button @click="addItem">add item</button>


    </div>
</template>

<script>
    export default {
        name: "TopicLists",
        data(){
            return {
                topics:["T0","T1","T2","T3",],
                tItem:""
            }
        },
        methods:{
            addItem:function(){
                if(this.tItem){
                    this.topics.push(this.tItem);
                    this.tItem = "";
                } else {
                    this.$swal('No Items');
                }
            }
        },
        computed:{
            listSize: function(){ return this.topics.length }
        }
    }
</script>

<style scoped>

</style>