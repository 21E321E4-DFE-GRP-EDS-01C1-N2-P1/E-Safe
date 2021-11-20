<template>
    <section id="shopping-cart" class="w-100">
        <div class="w-100 bg-light" style="min-height: 150px;"></div>
        <div class="w-100 bg-light text-center">
            <h3 class="border border-1 py-3 border-end-0 border-start-0">Shopping Cart</h3>
        </div>
        <div class="card mb-3 border-0 mx-auto" style="max-width: 860px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="../../assets/products/product_01.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="d-flex col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Azure Tobe</h5>
                    <p class="card-text">Size: Medium</p>
                    <p class="card-text"><small class="text-muted">$339.99</small></p>
                    <p class="card-text"><small class="text-danger">Delete</small></p>
                </div>
                <div class="d-flex my-auto h-25 border box-items">
                    <button type="button" class="product-plus px-4 border-0 bg-transparent fs-4 text-secondary">-</button>
                    <p class="text-center my-auto">1</p>
                    <button type="button" class="product-plus px-4 border-0 bg-transparent fs-4 text-secondary">+</button>
                </div>
            </div>
        </div>
        </div>
        <hr class="bg-secondary w-75 mx-auto">
        
             
    </section>
</template>

<script>
export default {
    name: 'Cart'
}
</script>

<style lang="scss" scoped>
.box-items:hover{
    border-color: black !important;
}
.product-plus:hover {
    color: black !important;
}
@media (max-width: 1440px) {
 
}

</style>