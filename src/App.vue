<template>
  <div id="app">
    <Navigation/>
    <router-view />
    <HomePage/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import HomePage from './components/Home.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navigation,
    HomePage,
    Footer
  }
}
</script>

<style lang="scss" scoped>
// @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;1,300&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
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