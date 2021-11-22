<template>
    <section id="" class="container bg-light min-vh-100">
        <div class="w-100 bg-light" style="height: 120px;"></div>
        <div class="bg-light d-flex justify-content-center my-auto p-4 border border-start-0 border-end-0" style="height: 120px;">
            <p class="my-auto fs-3">Checkout</p>
        </div>
        <div class="bg-light w-100 min-vh-100">
            <form>
                <fieldset disabled>
                    <legend class="fw-bold my-5">Billing & Shipping</legend>
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
                        <label for="floatingPassword">Email Address</label>
                    </div>
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
                </fieldset>
            </form>
        </div>
        <h3 class="text-center mb-4 fw-bold">Your Order</h3>
        <div class="w-50 input-group mb-3">
            <button @click="applyCoupon" class="btn btn-outline-secondary" type="button" id="button-addon1">Apply</button>
            <input v-model="coupon" type="number" class="form-control" placeholder="Your Coupon">
        </div>
        <div class="w-100 border mx-auto mb-3" >
            <Cart 
                v-for="productItem in cartProducts"
                :key="productItem.id"
                :productItem="productItem"
            />
        </div>
        <div class="d-flex justify-content-between border ">
            <p class="fs-5 fw-bold my-auto p-4 mx-4">TOTAL:</p>
            <p class="fs-4 fw-bold my-auto p-4 mx-4">${{ showValue() }}</p>
        </div>
        <div class="text-center p-5">
            <button class="btn btn-dark btn-cliked fs-5 px-5 rounded-3">Pay whit <span class="text-primary">Pay</span><span class="text-info">Pal</span></button>
        </div>
    </section>
    
</template>

<script>
import Cart from './Cart.vue'
import cartProducts from '../data/cart.js'

export default {
    name: 'Checkout',
    components: {
          Cart
    },
    data() {
        return {
            cartProducts: cartProducts,
            coupon: 0,
            valor: 0,
            total: 0
        }
    },
    methods: {
        showValue() {
            this.total = this.sumCart() - this.valor
            return this.total.toFixed(2)
        },
        applyCoupon() {
            this.valor = this.coupon
        },
        sumCart() {
            let sum = 0
            for(let product in this.cartProducts) {
                console.log(product.qt)
                    sum += this.cartProducts[product].qt * this.cartProducts[product].price                    
            }
            sum = Math.round(sum * 100) / 100
            return sum.toFixed(2) 
		},
    }
}
</script>

<style lang="scss" scoped>
.btn-cliked:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
}
</style>