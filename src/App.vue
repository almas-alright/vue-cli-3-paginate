<template>
  <div>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link>
    </div>
    <router-view/>
    <!--<button class="button is-primary is-large">I'm a large Bulma button</button>-->


  </div>

  </div>
</template>

<script>
  // import TestComponent from '@/components/Item.vue'


</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
