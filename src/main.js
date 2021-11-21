import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhnPhzQXFsOd_11T8VpGZflxO37qx_Fys",
    authDomain: "coding-style.firebaseapp.com",
    projectId: "coding-style",
    storageBucket: "coding-style.appspot.com",
    messagingSenderId: "578402053859",
    appId: "1:578402053859:web:a8db343299c333c72c9fd6"
  }

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')