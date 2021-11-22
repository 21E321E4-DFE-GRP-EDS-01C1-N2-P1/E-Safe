<template>
	<section class="form mx-5 padding">
		
		<div class="vh-100 ">
			<div class="shadow row main-div">
				<div class="image-align-self col-lg-5">
					<div class="branding mb-5">
						<h1 class="branding-name">Register</h1>
					</div>
				</div>
				<div class="col-lg">
					<div>
						<div class="d-flex flex-column">
							<div class="form-row d-flex">
								<div class="col m-3">
									<label for="inputFirstName">First Name</label>
									<input v-model="inputFirstName" type="text" class="form-control" placeholder="First name">
								</div>
								<div class="col m-3">
									<label for="inputLastName">Last Name</label>
									<input v-model="inputLastName" type="text" class="form-control" placeholder="Last name">
								</div>
							</div>
							<div class="form-row d-flex">
								<div class="col m-3">
									<label for="inputEmail">E-mail</label>
									<input v-model="state.inputEmail" type="text" class="form-control" placeholder="johndoe@email.com">
									<span v-if="v$.inputEmail.$error">
										{{ v$.inputEmail.$errors[0].$message }}
									</span>
								</div>
								<div class="col m-3">
									<label for="inputPhone">Phone (Only Numbers)</label>
									<input v-model="inputPhone" type="number" class="form-control" placeholder="+55 (021) 9999-0000">
								</div>
							</div>
							<div class="form-row d-flex flex-column">
								<div class="form-row d-flex">
									<div class="col m-3">
										<label for="inputPassword">Password</label>
										<input v-model="state.inputPassword" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Password">
										<span v-if="v$.inputPassword.$error">
											{{ v$.inputPassword.$errors[0].$message }}
										</span>
									</div>
									<div class="col m-3">
										<label for="inputConfirmPassword">Confirm Password</label>
										<input v-model="state.inputConfirmPassword" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Confirm Password">
										<span v-if="v$.inputConfirmPassword.$error">
											{{ v$.inputConfirmPassword.$errors[0].$message }}
										</span>
									</div>
								</div>
								<div class="m-3">
									<input class="toggle" type="checkbox" @click="togglePass"> Show Password
								</div>
								<div class="m-3">
									<input class="toggle" type="checkbox" @click="toggleAddress"> I Want to Add My Address
								</div>   
							</div>
							<div v-if="addAddress">
								<div class="form-row d-flex">
									<div class="form-group col m-3">
										<label for="inputAddress">Address</label>
										<input v-model="inputAddress" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
									</div>
									<div class="form-group col m-3">
										<label for="inputAddress2">Address 2</label>
										<input v-model="inputAddress2" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
									</div>
								</div>
								<div class="form-row d-flex">
									<div class="form-group  col m-3">
										<label for="inputCity">City</label>
										<input v-model="inputCity" type="text" class="form-control" id="inputCity" placeholder="New York">
									</div>
									<div class="form-group col m-3">
										<label for="inputState">State</label>
										<input v-model="inputState" type="text" class="form-control" id="inputState" placeholder="New York">
									</div>
									<div class="form-group col m-3">
										<label for="inputZip">Zip</label>
										<input v-model="inputZip" type="number" class="form-control" id="inputZip">
									</div>
								</div>
							</div>
							<div class="form-row mb-3">
								<div class="col-lg-7">
									<button @click="checkForm" class="btn1 mt-3 mb-5">Submit</button>
								</div>
							</div>
							
						</div>
					</div>           
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import useValidade from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import firebase from 'firebase'
import { ref } from 'vue'
import router from '../../router/index.js'
import { createUser } from '@/main'

export default {
	setup() {
		const inputEmail = ref("")
		const inputPassword = ref("")
		// const inputFirstName = ref("")
		// const inputLastName = ref("")
		// const inputPhone = ref("")
		// const inputAddress = ref("")
		// const inputAddress2 = ref("")
		// const inputCity = ref("")
		// const inputState = ref("")
		// const inputZip = ref("")

		const Register = () => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(state.inputEmail, state.inputPassword)
				.then(user => {
					alert(user)
					// window.location.replace('/Checkout')
					router.push({name: 'Account'})
				})
				.catch(err => alert(err.message))
		}

		const state = reactive({
			inputEmail:'',
			inputPassword: '',
			inputConfirmPassword: '',
			
		})
		const rules = computed(() => {
			return{
				inputEmail: { required, email },
				inputPassword: { required, minLength: minLength(6) },
				inputConfirmPassword: { required, sameAs: sameAs(state.inputPassword) }
			}
		})

		const v$ = useValidade(rules, state)

		return{
			Register,
			inputEmail,
			inputPassword,
			state,
			v$,
		}
	},
	data() {
		return {
			showPass: false,
			addAddress: false,
		}
	},
	methods: {
		togglePass(){
		this.showPass = !this.showPass
		},
		toggleAddress(){
		this.addAddress = !this.addAddress
		},
		checkForm() {
			this.v$.$validate()
			if(!this.v$.$error) {
				this.Register()
				this.createUserFirebase()
			} else{
				alert("Form Error!")
			}       
		} ,
		createUserFirebase(){
			createUser({
				FirstName: this.inputFirstName,
				LastName: this.inputLastName,
				Email: this.state.inputEmail,
				Phone: this.inputPhone,
				Address: this.inputAddress,
				Address2: this.inputAddress2,
				City: this.inputCity,
				State: this.inputState,
				Zip: this.inputZip
			})
		}
	},
	computed: {
		notSamePasswords() {
			return (this.inputPassword !== this.inputConfirmPassword)
		},
	}
}
</script>

<style lang="scss">
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.main-div{
	background: white;
	border-radius: 30px;
}
.padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
.image-align-self{
	align-self: center;
	padding: 25px;
}
img{
	border-radius: 30px;
}
form{
	padding: 25px;
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
.branding {
		display: flex;
		align-items: center;
		img {
		width: 40px;
		transition: .5s ease all;
		}
		.branding-name{
		font-size: 2rem;
		margin-left: 28px;
		}
}
.toggle {
	--size: 1.125rem;
	--width: calc(1.125rem * 2);
	display: inline-grid;
	align-items: center;
	width: var(--width);
	height: var(--size);
	cursor: pointer;
}
.toggle::before {
	content: "";
	grid-area: 1 / -1;
	width: var(--width);
	height: var(--size);
	transition: all 250ms ease;
	border-radius: var(--width);
	background-color: #000;
}
.toggle:hover::before {
	box-shadow: 0 0 0 2px #aef;
}
.toggle::after {
	content: "";
	grid-area: 1 / -1;
	width: calc(var(--size) * 0.8);
	height: calc(var(--size) * 0.8);
	transform: translateX(10%);
	transform-origin: center center;
	transition: all 250ms ease;
	border-radius: 100%;
	background: #fff;
}
.toggle:checked::before {
	background-color: #2be;
}
.toggle:checked::after {
	transform: translateX(calc(var(--width) - var(--size) * 0.8 - 10%));
}
.toggle:disabled {
	pointer-events: none;
	filter: grayscale(1);
}
.toggle:disabled::before {
	background: #2be;
}
</style>