<template>
  <section id="main-banner">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img v-bind:src="banners.slide1.image" class="d-block w-100 image-carousel" alt="teste">
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide1.text }}</p>
            <div class="d-flex justify-content-evenly">
              <button class="btn btn-outline-dark btn-sm">{{ banners.slide1.btnText1 }}</button>
              <button class="btn btn-outline-dark btn-sm">{{ banners.slide1.btnText2 }}</button>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide2.image" class="d-block w-100 image-carousel" alt="teste">
          <div class="position-absolute time-now translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide2.text }}</p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-dark ">{{ banners.slide2.btnText1 }}</button>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide3.image" class="d-block w-100 image-carousel" alt="teste">
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide3.text }}</p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-dark btn-sm">{{ banners.slide3.btnText1 }}</button>
            </div>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section id="best-sellers">
    <div class="w-100 vh-100 bg-dark">
      <div class="d-flex align-items-center bg-dark title-container">
        <p class="text-light fs-3 ms-5">Best Sellers</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom" >


        <div id="carouselExampleControls" class="w-100 carousel slide carousel-dark" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="best-product d-flex" style="width: 80%;">
                <div class="col-md-5 position-relative">
                  <img src="../assets/products/product_01.jpg" style="object-fit: cover; width: 100%; " alt="">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">New</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">Roll Top Backpack</h5>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <p class="text-muted px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam velit, pariatur molestias, illum ullam quasi vitae exercitationem molestiae, nulla fugiat perspiciatis! Nulla a consequatur unde in velit, ex tempora?</p>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <span class="fw-bold fs-5"><span class="fs-6 text-muted text-decoration-line-through fw-normal">$400.00</span>  $365.00</span>
                  <div class="d-inline mx-auto">
                    <a href="#" class="col-md-3 btn btn-dark me-2">View More</a>
                    <i class="btn btn-outline-dark col-md-1 bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex" style="width: 80%;">
                <div class="col-md-5 position-relative">
                  <img src="../assets/products/product_02.jpg" style="object-fit: cover; width: 100%; " alt="">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">New</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">Bomber in Cottone</h5>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <p class="text-muted px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam velit, pariatur molestias, illum ullam quasi vitae exercitationem molestiae, nulla fugiat perspiciatis! Nulla a consequatur unde in velit, ex tempora?</p>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <span class="fw-bold fs-5"><span class="fs-6 text-muted text-decoration-line-through fw-normal">$260.00</span>  $290.00</span>
                  <div class="d-inline mx-auto">
                    <a href="#" class="col-md-3 btn btn-dark me-2">View More</a>
                    <i class="btn btn-outline-dark col-md-1 bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex" style="width: 80%;">
                <div class="col-md-5 position-relative">
                  <img src="../assets/products/product_03.jpg" style="object-fit: cover; width: 100%; " alt="">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">New</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">Hooded Coat</h5>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <p class="text-muted px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam velit, pariatur molestias, illum ullam quasi vitae exercitationem molestiae, nulla fugiat perspiciatis! Nulla a consequatur unde in velit, ex tempora?</p>
                  <span class="bg-dark w-25 mx-auto" style="height: 1px;"></span>
                  <span class="fw-bold fs-5"><span class="fs-6 text-muted text-decoration-line-through fw-normal">$260.00</span>  $290.00</span>
                  <div class="d-inline mx-auto">
                    <a href="#" class="col-md-3 btn btn-dark me-2">View More</a>
                    <i class="btn btn-outline-dark col-md-1 bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>      
      </div>

    </div>
  </section>


</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      banners: 
        {
          slide1: { 
            image: require("../assets/S1.jpg"), 
            text: "Code Your Onw Style",
            btnText1: "Woman Collection",
            btnText2: "Man Collection"
          },
          slide2: { 
            image: require("../assets/S2.jpg"), 
            text: "The Time is Now",
            btnText1: "Discover"  
          },
          slide3: { 
            image: require("../assets/S3.jpg"), 
            text: "ss '22 Collection",
            btnText1: "Shop Now"
          }
        }
    }
  }
}
</script>

<style>
.image-carousel {
    object-fit: cover;
    height: 100vh;
}
.time-now {
  top: 50%;
  left: 30%;
}
.title-container {
  height: 15%;
}
.image-container {
  min-height: 85%;
}
.radius-bottom {
  border-radius: 0 0 50px 50px;
}

.best-product {
  margin: 0 auto;
}

.btn-dark:hover {
  background-color: transparent;
  color: black;
}

@media (max-width: 960px) {
  .best-product {
    display: flex;
    flex-direction: column;
  }
}
</style>