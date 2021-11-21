<template>
	<header :class="{ 'scrolled-nav' : scrolledNav }">

		<div class="d-flex flex-column">
			<nav>
				<div class="branding">
					<img src="@/assets/logo.png" alt="logo">
					<p class="branding-name">Coding Style</p>
				</div>
				<ul v-show="!mobile" class="navigation">
					<li><router-link class="link" :to="{name: 'Home'}">&lt; Home /&gt;</router-link></li>
					<li><router-link class="link" :to="{name: 'Women'}">&lt; Women /&gt;</router-link></li>
					<li><router-link class="link" :to="{name: 'Men'}">&lt; Men /&gt;</router-link></li>
					<li><router-link class="link" :to="{name: 'Pet'}">&lt; Pet /&gt;</router-link></li>
					<li><router-link class="link-account" :to="{name: 'Account'}"> &lt; My Account /&gt; </router-link></li>
					<li class="link" @click="toggleCart">
						<i class="fa fa-shopping-cart"/> Cart 
							<span class="badge">{{ sumQt }}</span>
					</li>
					<li class="link" @click="toggleSearch">
						<i class="fas fa-search"></i>
					</li>
				</ul>
				<div class="icon">
					<i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
				</div>
				<transition name="mobile-nav">
					<ul v-show="mobileNav" class="dropdown-nav">
						<div class="d-flex flex-column">
							<li @click="toggleMobileNav"><router-link class="p-2 link-account" :to="{name: 'Account'}">&lt; My Account /&gt;</router-link></li>
							<li class="p-2 text-dark link-account" @click="toggleCartAndNav">
								<i class="text-dark fa fa-shopping-cart"/> Cart 
									<span class="text-dark badge">{{ sumQt }}</span>
							</li>	
							<li class="p-2 text-dark">
								<div class="d-flex">
									<button type="button" class="btn btn-outline-dark">
										<i class="fas fa-search"></i>
									</button>
									<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
								</div>
							</li>
							<li @click="toggleMobileNav"><router-link class="p-2 link" :to="{name: 'Home'}">&lt; Home /&gt;</router-link></li>
							<li @click="toggleMobileNav"><router-link class="p-2 link" :to="{name: 'Women'}">&lt; Women /&gt;</router-link></li>
							<li @click="toggleMobileNav"><router-link class="p-2 link" :to="{name: 'Men'}">&lt; Men /&gt;</router-link></li>
							<li @click="toggleMobileNav"><router-link class="p-2 link" :to="{name: 'Pet'}">&lt; Pet /&gt;</router-link></li>

						</div>
						
					</ul>
				</transition>
			</nav>
			<div v-show="showSearch" class="w-25 m-5 align-self-center input-group">
				<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
				<button type="button" class="btn btn-outline-light">
						<i class="fas fa-search"></i>
				</button>
			</div>
			<div v-show="showCart" class="container v-fade">
				<div class="shopping-cart d-flex flex-column ">
					<div class="shopping-cart-header d-flex justify-content-around">
						<div>
							<i class="fa fa-shopping-cart cart-icon"></i>
							<span class="badge">{{ sumQt }}</span>
						</div>
						
						<div class="shopping-cart-total">
							<span class="lighter-text">Total:</span>
							<span class="main-color-text">$ {{ sumCart }}</span>
						</div>
					</div>
					<ul class="shopping-cart-items mt-5 align-self-center">
						<Cart 
							v-for="productItem in cartProducts"
							:key="productItem.id"
							:productItem="productItem"
						/>
					</ul>

					<a href="#" class="button">Checkout</a>
				</div>
			</div>
		</div>
		
	</header>
</template>

<script>
import Cart from './Cart.vue'
import cartProducts from '../data/cart.js'

export default {
		name: 'navigation',
		components: {
					Cart
		},
		data() {
			return {
				scrolledNav: null,
				mobile: true,
				mobileNav: null,
				windowWidth: null,
				showCart: false,
				showSearch: false,
				cartProducts: cartProducts,
			}
		},
		computed: {
				sumCart() {
						let sum = 0
						for(let product in this.cartProducts) {
							console.log(product.qt)
								sum += cartProducts[product].qt * cartProducts[product].price                    
						}
						return Math.round(sum * 100) / 100
				},
				sumQt() {
						let sum = 0
						for(let product in this.cartProducts) {
								sum += cartProducts[product].qt
										
						}
						return sum
				}
		},


		created() {
			window.addEventListener('resize', this.checkScreen)
			this.checkScreen()
		},

		mounted () {
			window.addEventListener("scroll", this.updateScroll)
		},

		methods: {
			toggleMobileNav(){
				this.mobileNav = !this.mobileNav
			},

			updateScroll() {
				const scrollPosition = window.scrollY
				if(scrollPosition > 50) {
					this.scrolledNav = true
					return
				}
				this.scrolledNav = false
			},

			checkScreen(){
				this.windowWidth = window.innerWidth
				if(this.windowWidth <= 1028){
					this.mobile = true
					return
				}
				this.mobile = false
				this.mobileNav = false
				return
			},
			toggleCart(){
				this.showCart = !this.showCart
			},
			toggleSearch(){
				this.showSearch = !this.showSearch
			},
			toggleCartAndNav(){
				this.toggleCart()
				this.toggleMobileNav()
			}

	}
};
</script>

<style lang="scss" scoped>

header {
	background-color: rgba(33, 37, 41, 0.9);
	z-index: 999;
	width: 100%;
	position: fixed;
	transition: .5s ease all;
	color: white;
	nav {
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 12px 0;
		transition: .5s ease all;
		width: 90%;
		margin: 0 auto;
		@media (min-width: 1140px){
			max-width: 1140px;
		}
		@media (max-width: 1165px){
			.branding-name {
				display: none;
			}
		}

		ul, .link, .link-account {
			font-weight: 500;
			color: white;
			list-style: none;
			text-decoration: none;
		}

		li {
			text-transform: uppercase;
			padding: 16px;
			margin-left: 16px;
		}
		.link {
			cursor: pointer;
			font-size: 14px;
			transition: .5s ease all;
			padding-bottom: 4px;
			border-bottom: 1px solid transparent;
			cursor: pointer;

			&:hover {
				color: #08afea;
				border-color: #08afea;
			}
		}
		.link-account {
			font-size: 14px;
			transition: .5s ease all;
			padding: 4px;
			border: 1px solid transparent;
			border-color: #ffffff;
			cursor: pointer;

			&:hover {
				color: #08afea;
				border-color: #08afea;
			}
		}

		.branding {
			display: flex;
			align-items: center;

			img {
				width: 50px;
				transition: .5s ease all;
			}
			.branding-name{
				font-size: 2rem;
				margin-left: 28px;
				margin-bottom: 0;
			}
		}

		.navigation{
			display: flex;
			align-items: center;
			flex: 1;
			justify-content: flex-end;
		}

		.icon {
			display: flex;
			align-items: center;
			position: absolute;
			top: 0;
			right: 24px;
			height: 100%;

			i {
				cursor: pointer;
				font-size: 24px;
				transition: .8s ease all;
			}
		}

		.icon-active{
			transform: rotate(180deg);
		}

		.dropdown-nav {
			display: flex;
			flex-direction: column;
			position: fixed;
			width: 100%;
			max-width: 250px;
			height: 100%;
			background-color: white;
			top: 0;
			left: 0;

			li {
				margin-left: 0;
				.link, .link-account {
					color: #000;
				}
				.link-account {
					border-color: #000;
					&:hover {
						border-color: #08afea;
					}
				}
			}
		}

		.mobile-nav-enter-active, .mobile-nav-leave-active{
			transition: 1s ease all;
		}
		
		.mobile-nav-enter-from, .mobile-nav-leave-to{
			transform: translateX(-250px);
		}

		.mobile-nav-enter-to{
			transform: translateX(0);
		}
	}
}

.scrolled-nav {
	background-color: #212529;
	color: white;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

	nav, .link{
		padding: 8px 0;
		color: white;

		.branding{
			img{
				width: 40px;
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
			}
		}
	}
}
.form-control:focus {
  border-color: #08afea;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(8, 175, 234, 1);
}
.lighter-text {
	color: #ABB0BE;
}
.shopping-cart:after {
	bottom: 100%;
	left: 89%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: white;
	border-width: 8px;
	margin-left: -8px;
}

.cart-icon {
	color: #515783;
	font-size: 24px;
	margin-right: 7px;
	float: left;
}

.button {
	background: black;
	color:white;
	text-align: center;
	padding: 12px;
	text-decoration: none;
	display: block;
	border-radius: 30px;
	font-size: 16px;
	margin: 25px 0 15px 0;
	
	&:hover {
		background-color: white;
		border: 2px solid;
		color: black;
	}
}

.clearfix:after {
	content: "";
	display: table;
	clear: both;
}
.v-fade {
	// display: inherit !important; /* override v-show display: none */
	transition: opacity 0.5s;
}

.v-fade[style*="display: none;"] {
	opacity: 0;
	pointer-events: none; /* disable user interaction */
	user-select: none; /* disable user selection */
}

</style>
