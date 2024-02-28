<template>
  <div id="app">
    <Sidebar />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style scoped>
#app {
  display: flex;
}
main {
  flex-grow: 1;
}
</style>
