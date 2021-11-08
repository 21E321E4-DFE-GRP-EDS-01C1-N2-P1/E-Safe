<template>
  <div class="app">
    <Navigation/>
    <router-view />
  </div>
  <HomePage msg="Welcome to Coding Style"/>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HomePage from './components/HomePage.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    HomePage,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
}

// .app {
//   min-height: 100vh;
//   position: relative;
//   background-color: #f1f1f1;
// }
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
}
</style>