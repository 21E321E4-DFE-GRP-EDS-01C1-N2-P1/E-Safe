<template>
	<section class="form mx-5 padding-top">
		<div>
			<div class="shadow row main-div d-flex justify-content-center">
				<div class="image-align-self col-lg-5">
					<div class="branding mb-5">
						<img src="@/assets/logo.png" alt="logo">
						<p class="branding-name">Coding Style</p>
					</div>
					<img src="../../assets/Deal-of-the-day.jpg" class="img-fluid"  alt="Login Cover">
				</div>
				<div class="col-lg-7 ">
					<form>
						<h2 class="font-weight-bold py-3">Login</h2>
						<div class="form-group row mb-3">
							<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg m-1">Email</label>
							<div class="col-sm-10">
								<input v-model="email" type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Email-Address" required>
							</div>
						</div>
						<div class="form-group row mb-3">
							<label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg m-1">Password</label>
							<div class="col-sm-10">
								<input v-model="password" type="password" class="form-control form-control-lg" id="colFormLabelLg" placeholder="*********" required>
							</div>
						</div>
						
						<div class="form-row mb-3">
							<div class="col-lg-7">
								<button @click="Login" type="button" class="btn1 mt-3 mb-5">Login</button>
							</div>
						</div>
						<a href="#">Forgot Password</a>
						<p>Don't have an account? <a href="Register">Register Here</a></p>
					</form>            
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { ref } from 'vue'
import firebase from 'firebase'

export default {
	setup() {
		const email = ref("")
		const password = ref("")

		const Login = () => {
			firebase
				.auth()
				.signInWithEmailAndPassword(email.value, password.value)
				.then(data => console.log(data))
				.catch(err => alert(err.message))
		}

		return{
			Login,
			email,
			password
		}
	},
}
</script>

<style lang="scss">
*{
    padding: 0;
    margin: 0;
    // box-sizing: border-box;
}
body{
    background-color: white;
}
.row{
    // background: white;
    // border-radius: 30px;
    // display: flex;
    // // flex-direction: row;
    // justify-content: space-around;
    // align-items: center;
}
.padding-top{
	padding-top: 120px;
}
.image-align-self{
	align-self: center;
	padding: 25px;
}
img{
    // border-radius: 30px;
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
</style>