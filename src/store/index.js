import { createStore } from 'vuex'
import userData from '../data/user.js'
import cartProducts from '../data/cart.js'
import firebase from 'firebase'
import router from '../router/index.js'
import { db } from '@/main'

export default createStore({
	state: {
		userData: userData,
		cartProducts: cartProducts,
	},
	mutations: {
		registerFirebase(state){
			firebase
				.auth()
				.createUserWithEmailAndPassword(state.userData.email, state.userData.password)
				.then(firebase_data => {
					alert("FirebaseAuth Success: Account Created!")
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
		addCart(state, newItem) {
			const cardItem = state.cartProducts.find(item => item.id === newItem.id)
			// if (state.cartProducts.length > 0) {		
			// 	for(let item in state.cartProducts) {
			// 		console.log('Velho', state.cartProducts[item].choseSize);
			// 		console.log('novo', newItem.choseSize);
			// 		if (state.cartProducts[item].id === newItem.id) {
			// 			if (state.cartProducts[item].choseSize === newItem.choseSize) {
			// 				state.cartProducts[item].qty += 1
			// 			} else {
			// 				newItem.qty = 1
			// 				state.cartProducts.push(newItem)		
			// 			}
			// 		} else {
			// 			newItem.qty = 1
			// 			state.cartProducts.push(newItem)
			// 		}
			// 	}
				
			// } else {
			// 	newItem.qty = 1
			// 	state.cartProducts.push(newItem)
			// }


			if(cardItem) {
				console.log('cardItem  ----->', cardItem.choseSize)
				console.log('newItem  ----->', newItem.choseSize)
				cardItem.qty += 1
			} else {
				newItem.qty = 1
				state.cartProducts.push(newItem)
			}
			window.localStorage.setItem('myCart', JSON.stringify(state.cartProducts))
		},
		removeItemCart(state, payload) {
			state.cartProducts.splice(payload, 1)
            window.localStorage.setItem('myCart', JSON.stringify(state.cartProducts))
		},
		
		
	},
	actions: {

	},
	modules: {
	}
})
