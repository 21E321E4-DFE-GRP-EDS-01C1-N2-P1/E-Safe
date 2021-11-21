<template>
		<section class="form mx-5 padding main-div">
			<div class="shadow row main-div d-flex justify-content-center">
				<div class="image-align-self col-lg-5">
					<div class="branding mb-5">
						<h1 class="branding-name">Account Page</h1>
					</div>
				</div>
				<div class="form-row mb-3">
					<div class="col-lg-7">
						<button @click="logout" class="btn1 mt-3 mb-5">Logout</button>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase'
// import { ref } from 'veu'

export default {
	setup() {
		const router = useRouter()
		const route = useRoute()
		
		// const name = ref("")

		onBeforeMount(() => {		
			firebase.auth().onAuthStateChanged((user) => {
				if(!user){
					router.replace('/Login')
				} else if (route.path == '/Login' || route.path == '/Register'){
					router.replace('/Account')
				} 
			})

		})

		const Logout = () =>{
			firebase
				.auth()
				.signOut()
				.then(() => console.log("Loged out"))
				.catch(err => alert(err.message))
		}

		return{
			Logout
		}


	},
	methods: {
		logout(){
			this.Logout()
		}
	}

}
</script>

<style>
.main-div{
	background: white;
	border-radius: 30px;
}
.padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
</style>