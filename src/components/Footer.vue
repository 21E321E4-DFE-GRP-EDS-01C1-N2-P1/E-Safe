<template>
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

                    <div class="col-md-4">
                        <h5 class="text-light">Institutional</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">My Account</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/217/217422.png" class="mx-4 margin-mob resize-icon" width="100" alt="paypal">
                        <img src="https://cdn-icons-png.flaticon.com/512/1488/1488176.png" class="mx-4 margin-mob resize-icon" width="100" alt="money back">
                        <img src="https://cdn-icons-png.flaticon.com/512/4289/4289291.png" class="mx-4 margin-mob resize-icon" width="100" alt="credit card">
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
    name: "Footer"
}
</script>

<style scoped>

@media (max-width: 986px) {
  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .margin-mob {
      margin: 0 15px !important;
  }
  .resize-icon {
    transform: scale(0.8)
  }
 
}
</style>