import { createStore } from 'vuex'
import userData from '../data/user.js'
import firebase from 'firebase'
import router from '../router/index.js'
import { db } from '@/main'

export default createStore({
	state: {
	userData: userData,
	},
	mutations: {
	registerFirebase(state){
			firebase
				.auth()
				.createUserWithEmailAndPassword(state.userData.email, state.userData.password)
				.then(firebase_data => {
					console.log("User Object UID: ------> ", firebase_data.user.uid)
					state.userData.id = firebase_data.user.uid
					this.commit('createUserFirebase')
					router.push({name: 'Account'})
				})
				.catch(err => {
			console.log("FirebaseAuth Error: ", err.message)
			alert("FirebaseAuth Error: ",err.message)
		})
		},
	createUserFirebase(state){
			db.collection('users').doc(state.userData.id).set(state.userData)
		.then(
			alert("FirebaseStore Success: Data Store!")
		)
		.catch(err => {
			console.log("FirebaseStore Error: ", err.message)
			alert("FirebaseStore: ", err.message)
		})
		},    
	},
	actions: {

	},
	modules: {
	}
})
