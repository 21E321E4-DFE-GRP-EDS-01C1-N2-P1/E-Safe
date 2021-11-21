<template>
    <section class="form mx-5 padding-top">
        <div>
            <div class="shadow row">
                <div class="col-lg-7">
                    <form>
                        <div class="d-flex flex-column">
                            <div class="form-row d-flex">
                                <div class="col m-3">
                                    <label for="inputFirstName">First Name</label>
                                    <input type="text" class="form-control" placeholder="First name">
                                </div>
                                <div class="col m-3">
                                    <label for="inputLastName">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last name">
                                </div>
                            </div>
                            <div class="form-row d-flex">
                                <div class="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address 2</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity">
                                </div>
                                <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                <label class="form-check-label" for="gridCheck">
                                    Check me out
                                </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>           
                </div>
            </div>
        </div>
    </section>
</template>
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
    // display: flex;
    // justify-content: center;
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