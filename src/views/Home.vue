<template>
  <div class="home">
    <HelloWorld msg="Vue js learning"/>
    <hr>
    <TopicLists></TopicLists>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopicLists from '@/components/TopicLists.vue'


export default {
  name: 'home',
  components: {
    HelloWorld, TopicLists
  }
}
</script>
