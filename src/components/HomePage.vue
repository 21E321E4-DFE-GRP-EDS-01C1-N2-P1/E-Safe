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
          <img v-bind:src="banners.slide1.image" class="d-block w-100 image-carousel" alt="slide 1">
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide1.text }}</p>
            <div class="d-flex justify-content-evenly">
              <button class="btn btn-outline-dark btn-sm">{{ banners.slide1.btnText1 }}</button>
              <button class="btn btn-outline-dark btn-sm">{{ banners.slide1.btnText2 }}</button>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide2.image" class="d-block w-100 image-carousel" alt="slide 2">
          <div class="position-absolute time-now translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide2.text }}</p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-outline-dark ">{{ banners.slide2.btnText1 }}</button>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide3.image" class="d-block w-100 image-carousel" alt="slide 3">
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
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class=" text-light fs-3">Best Sellers</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom" >
        <div id="carouselExampleControls" class="w-100 carousel slide carousel-dark" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="best-product d-flex resize-width-80">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSellers.product1.image" class="resize-main-slide" alt="product 01">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">{{ bestSellers.product1.tag }}</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">{{ bestSellers.product1.title }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSellers.product1.text }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSellers.product1.oldPrice }}</span> ${{ bestSellers.product1.price }}</span>
                  <div class="d-inline mx-auto">
                    <a href="#" class="col-md-3 btn btn-dark me-2">View More</a>
                    <i class="btn btn-outline-dark col-md-1 bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex resize-width-80">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSellers.product2.image" class="resize-main-slide" alt="product 02">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">{{ bestSellers.product2.tag }}</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">{{ bestSellers.product2.title }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSellers.product2.text }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSellers.product2.oldPrice }}</span>  ${{ bestSellers.product2.price }}</span>
                  <div class="d-inline mx-auto">
                    <a href="#" class="col-md-3 btn btn-dark me-2">View More</a>
                    <i class="btn btn-outline-dark col-md-1 bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex resize-width-80">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSellers.product3.image" class="resize-main-slide" alt="product 03">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">{{ bestSellers.product3.tag }}</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">{{ bestSellers.product3.title }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSellers.product3.text }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSellers.product3.oldPrice }}</span> ${{ bestSellers.product3.price }}</span>
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
  <section id="woman-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Woman Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="overflow-hidden position-relative resize-main-div">
            <a href="#" class="">
              <p class="text-light fs-1 position-absolute top-50 start-50 translate-middle text-front">{{ womanStyle.mainCategoty.text }}</p>  
              <p class="text-light fs-5 mt-5 pt-5 text-decoration-underline position-absolute top-50 start-50 translate-middle" style="z-index: 100;">{{ womanStyle.mainCategoty.link }}</p>  
              <img v-bind:src="womanStyle.mainCategoty.image" alt="w1" class="zoom resize-main-slide">
            </a>
          </div>
          <div class="" >
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category1.text }}</p>
                  <img v-bind:src="womanStyle.category1.image" alt="w2" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category2.text }}</p>
                  <img v-bind:src="womanStyle.category2.image" alt="w3" class="zoom resize-main-slide">
                </a>
              </div>
            </div>
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category3.text }}</p>
                  <img v-bind:src="womanStyle.category3.image" alt="w4" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category4.text }}</p>
                  <img v-bind:src="womanStyle.category4.image" alt="w5" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category5.text }}</p>
                  <img v-bind:src="womanStyle.category5.image" alt="w6" class="zoom resize-main-slide">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="man-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Man Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="" >
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category1.text }}</p>
                  <img v-bind:src="manStyle.category1.image" alt="w2" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category2.text }}</p>
                  <img v-bind:src="manStyle.category2.image" alt="w3" class="zoom resize-main-slide">
                </a>
              </div>
            </div>
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category3.text }}</p>
                  <img v-bind:src="manStyle.category3.image" alt="w4" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category4.text }}</p>
                  <img v-bind:src="manStyle.category4.image" alt="w5" class="zoom resize-main-slide">
                </a>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <a href="#">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category5.text }}</p>
                  <img v-bind:src="manStyle.category5.image" alt="w6" class="zoom resize-main-slide">
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden position-relative resize-main-div">
            <a href="#" class="">
              <p class="text-light fs-1 position-absolute top-50 start-50 translate-middle text-front">{{ manStyle.mainCategoty.text }}</p>  
              <p class="text-light fs-5 mt-5 pt-5 text-decoration-underline position-absolute top-50 start-50 translate-middle" style="z-index: 100;">{{ manStyle.mainCategoty.link }}</p>  
              <img v-bind:src="manStyle.mainCategoty.image" alt="w1" class="zoom resize-main-slide">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="pet-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Pet Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="m-1 overflow-hidden position-relative">
            <a href="#">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category1.text }}</p>
              <img v-bind:src="petStyle.category1.image" alt="w2" class="zoom resize-main-slide">
            </a>
          </div>
          <div class="m-1 overflow-hidden position-relative">
            <a href="#">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category2.text }}</p>
              <img v-bind:src="petStyle.category2.image" alt="w2" class="zoom resize-main-slide">
            </a>
          </div>
          <div class="m-1 overflow-hidden position-relative">
            <a href="#">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category3.text }}</p>
              <img v-bind:src="petStyle.category3.image" alt="w2" class="zoom resize-main-slide">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer" class="bg-dark pt-5">
    <div class="container">
      <footer class="py-3">
        <div class="row">
          <div class="col-md-2">
            <h5 class="text-light">Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Woman</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Men</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pet</a></li>
            </ul>
          </div>

          <div class="col-md-2">
            <h5 class="text-light">Institutional</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">My Account</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
            </ul>
          </div>
          
          <div class="col-md-8">
            <img src="https://cdn-icons-png.flaticon.com/512/217/217422.png" class="mx-4 resize-icon" width="100" alt="paypal">
            <img src="https://cdn-icons-png.flaticon.com/512/1488/1488176.png" class="mx-4 resize-icon" width="100" alt="money back">
            <img src="https://cdn-icons-png.flaticon.com/512/4289/4289291.png" class="mx-4 resize-icon" width="100" alt="credit card">
          </div>
        </div>

        <div class="d-flex justify-content-between py-4 my-4 border-top text-light">
          <p>© 2021 Coding Style. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a href="#"><i class="bi bi-twitter fs-4 text-light"></i></a></li>
            <li class="ms-3"><a href="#"><i class="bi bi-facebook fs-4 text-light"></i></a></li>
            <li class="ms-3"><a href="#"><i class="bi bi-instagram fs-4 text-light"></i></a></li>
          </ul>
        </div>
      </footer>
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
        },
      bestSellers: 
        {
          product1: {
            title: "Roll Top Backpack",
            image: require("../assets/products/product_01.jpg"), 
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, nulla. Aspernatur possimus provident mollitia perferendis veritatis perspiciatis repellat, necessitatibus, amet inventore illo blanditiis aperiam tempora soluta dolorum eum accusamus sunt.",
            price: 365.00,
            oldPrice: 400.00,
            tag: "New"
          },
          product2: {
            title: "Bomber in Cotton",
            image: require("../assets/products/product_02.jpg"), 
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque a dignissimos, nesciunt consequatur omnis, illo modi unde officia, quisquam corporis incidunt voluptates quidem autem repudiandae? Temporibus natus harum reiciendis quas.",
            price: 290.00,
            oldPrice: 260.00,
            tag: "New"
          },
          product3: {
            title: "Hooded Coat",
            image: require("../assets/products/product_03.jpg"), 
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti veniam nesciunt temporibus eveniet aspernatur! Tenetur molestias esse accusamus unde quidem, non harum reprehenderit quasi hic exercitationem, aspernatur nobis vero!",
            price: 320.00,
            oldPrice: 295.00,
            tag: "New"
          }
        },
      womanStyle: 
        {
          mainCategoty: {
            image: require("../assets/woman-style/w-1.jpg"), 
            text: "New Arrivals",
            link: "Explore Now"
          },
          category1: {
            image: require("../assets/woman-style/w-2.jpg"), 
            text: "Short&Pants"
          },
          category2: {
            image: require("../assets/woman-style/w-3.jpg"), 
            text: "Accessories"
          },
          category3: {
            image: require("../assets/woman-style/w-4.jpg"), 
            text: "Skirts"
          },
          category4: {
            image: require("../assets/woman-style/w-5.jpg"), 
            text: "Bags"
          },
          category5: {
            image: require("../assets/woman-style/w-6.jpg"), 
            text: "Shoes"
          },
        },
      manStyle: 
        {
          mainCategoty: {
            image: require("../assets/man-style/m-1.jpg"), 
            text: "New Arrivals",
            link: "Explore Now"
          },
          category1: {
            image: require("../assets/man-style/m-2.jpg"), 
            text: "Shirts"
          },
          category2: {
            image: require("../assets/man-style/m-3.jpg"), 
            text: "Short&Pants"
          },
          category3: {
            image: require("../assets/man-style/m-4.jpg"), 
            text: "Shoes"
          },
          category4: {
            image: require("../assets/man-style/m-5.jpg"), 
            text: "Hats"
          },
          category5: {
            image: require("../assets/man-style/m-6.jpg"), 
            text: "T-shirts"
          },
        },
      petStyle: 
        {
          category1: {
            image: require("../assets/pet-style/p-1.jpg"), 
            text: "Scratchers"
          },
          category2: {
            image: require("../assets/pet-style/p-2.jpg"), 
            text: "Transport bags"
          },
          category3: {
            image: require("../assets/pet-style/p-3.jpg"), 
            text: "Beds"
          },
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
.box-container {
  min-height: 100vh;
}
.title-container {
  min-height: 15vh;
}
.image-container {
  min-height: 85vh;
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
.zoom {
  transition: all 0.3s;
}
.zoom:hover {
  transform: scale(1.1)
}
.minimal-line {
  height: 1px;
}
.resize-width-80 {
  width: 80%;
}
.resize-main-div {
  max-width: 90%;
}
.resize-main-slide { 
  object-fit: cover;
  max-width: 100%;
} 
.resize-height {
  max-height: 100% 
}
.resize-height-50 {
  max-height: 50%
}
.resize-height-33 {
  max-height: 33%
}
.text-front {
  z-index: 100;
}

@media (max-width: 760px) {
  .best-product {
    display: flex;
    flex-direction: column;
  }
  .hide-component  {
    display: none;
  }

  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }
}

@media (max-width: 986px) {
  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }

  .resize-icon {
    transform: scale(0.8)
  }
 
}
</style>