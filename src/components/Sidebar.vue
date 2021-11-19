<template>
    <section id="sidebar" class="max-vh-100 w-25">
        <div class="part-sidebar" v-for="type in filters" :key="type">
            <h6 class="fw-bold m-4 ">{{ type.title }}</h6>
            <nav>
                <ul v-for="item in type.list" :key="item">
                    <li class="list-unstyled"><a class="text-decoration-none text-secondary" href="#">{{ item }}</a></li>
                </ul>
            </nav>
            <hr class="my-5 mx-4 bg-secondary ">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            filters: {
                categories: {
                    title: 'Product Categories',
                    list: ['Accessories', 'Bags', 'Shoes', 'Man', 'Woman', 'Pet']
                },    
                size: {
                    title: 'Size',
                    list: ['Large', 'Medium', 'Small']
                }    
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
@media (max-width: 1140px) {
  #sidebar {
    display: flex;
    flex-direction: row; 
    justify-content: space-around;
    width: 100% !important;
  }
  hr {
    display: none;   
  }
}
</style>