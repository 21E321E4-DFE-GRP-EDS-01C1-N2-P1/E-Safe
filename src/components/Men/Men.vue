<template>
    <Banner/>
    <div class="d-flex w-100 body-products">
        <Sidebar/>  
        <section id="products" class="max-vh-100 w-100">
            <div class="bg-light py-2 w-100">
                <p class="text-center fs-3 text-dark my-2">Shop now</p>
            </div>  
            <div class="row col-md-12">
                <Thumbnail
                    v-for="product in categoryFilter"
                    :key="product.id"
                    :product="product"/>
            </div>
        </section>
    </div>
</template>

<script>
import Banner from '../Banner.vue'
import Sidebar from '../Sidebar.vue'
import Thumbnail from '../Thumbnail.vue'
import items from '../../data/items.js'


export default {
    name: 'Women',
    components: {
        Banner,
        Sidebar,
        Thumbnail
    },
    data() {
        return {
            items: items
        }
    }, 
    computed: {
        categoryFilter() {
            let list = []
            for(let item in this.items) {
                // console.log(.gender)
                if(this.items[item].gender === 'male') 
                    list.push(this.items[item])
            }
            console.log(list)
            return list
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    height: 600px;
}
.banner-image {
    object-fit: cover;
}
.row {
    --bs-gutter-x: 0;
}
@media (max-width: 1140px) {
  .body-products {
    flex-direction: column;
  }
}
</style>