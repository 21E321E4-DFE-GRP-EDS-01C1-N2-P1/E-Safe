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
        <div class="w-25 input-group mb-3">
            <button class="btn btn-outline-secondary" type="button" id="button-addon1">Apply</button>
            <input type="text" class="form-control" placeholder="Your Coupon" aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>
        <div class="w-100 text-center border mx-auto mb-3" >
            <Cart 
                v-for="productItem in cartProducts"
                :key="productItem.id"
                :productItem="productItem"
            />
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
            cartProducts: cartProducts
        }
    }
}
</script>