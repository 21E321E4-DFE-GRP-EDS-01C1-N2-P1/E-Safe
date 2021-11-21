<template>
	<section id="" class="container bg-light min-vh-100">
        <div class="w-100 bg-light" style="height: 120px;"></div>
        <div class="bg-light d-flex justify-content-center my-auto p-4 border border-start-0 border-end-0" style="height: 120px;">
            <p class="my-auto fs-3">My Account</p>
        </div>
		<div class="d-flex justify-content-end ">
			<button type="button" class="btn btn-dark mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Whishlist</button>
			<button type="button" class="btn btn-dark ms-2">My Orders</button>
		</div>
		<div class="bg-light w-100">
            <form>
                <fieldset disabled>
                    <legend class="fw-bold my-5">Personal Information</legend>
                    <div class="col-md-10 d-flex  mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" value="First Name">
                            <label for="floatingInput">First name</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" value="Last Name">
                            <label for="floatingPassword">Last name</label>
                        </div>
                    </div>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3 ">
                        <input type="email" class="form-control" id="floatingPassword" value="name@example.com">
                        <label for="floatingPassword">Email address</label>
                    </div>
                    <div class="col-md-10 d-flex  mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" value="+55 (021) 9999-0000">
                            <label for="floatingInput">Phone number</label>
                        </div>
                        <div class="col-md-6 form-floating">
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
		<div class="bg-light w-100">
            <form>
                <fieldset disabled>
                    <legend class="fw-bold my-5">Address</legend>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
                        <input type="text" class="form-control" id="floatingPassword" value="1234 Main Stm">
                        <label for="floatingPassword">Address</label>
                    </div>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
                        <input type="text" class="form-control" id="floatingPassword" value="Apartment, studio, or floor">
                        <label for="floatingPassword">Address 2</label>
                    </div>
                    <div class="col-md-10 d-flex  mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" value="City">
                            <label for="floatingInput">City</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" value="State">
                            <label for="floatingPassword">State</label>
                        </div>
                    </div>
                    <div class="col-md-10 d-flex mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" value="20511-390">
                            <label for="floatingInput">Zip</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" value="Neighborhood">
                            <label for="floatingPassword">Neighborhood</label>
                        </div>
                    </div>
                    <div class="col-md-10 d-flex mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" value="Brazil">
                            <label for="floatingInput">Country</label>
                        </div>
                        <div class="col-md-6 form-floating">
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
		<div class="col-lg-3 mx-auto p-4">
			<button @click="logout" class="btn1 mt-3 mb-5 btn-1">Logout</button>
		</div>
		<Wishlist/>
	</section>
				
</template>

<script>
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase'
import Wishlist from '../Wishlist.vue'
// import { ref } from 'veu'

export default {
	components: {
		Wishlist
	},
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

<style lang="scss" scoped>
.main-div{
	background: white;
	border-radius: 30px;
}
.padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
.btn1{
	border: none;
	outline: none;
	height: 50px;
	width: 100%;
	background-color: black;
	color: white;
	border-radius: 30px;
	cursor: pointer;
	&:hover {
		background-color: white;
		border: 2px solid;
		color: black;
		}
}
</style>