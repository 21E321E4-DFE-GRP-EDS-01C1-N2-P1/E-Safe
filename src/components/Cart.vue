<template>
		<li class="clearfix p-2">
			<img class="img-config img-fluid img-thumbnail" :src="productItem.img" :alt="productItem.name" />
			<span class="item-name p-3">{{ productItem.name }}</span>
			<span class="item-price p-3">${{ productItem.price.toFixed(2) }}</span>
			<span class="item-quantity">Quantity: {{ productItem.qt }}</span>
		</li>
</template>

<script>
export default {
		name: 'Cart',
		props: ['productItem']
}
</script>

<style lang="scss" scoped>
.img-config{
	width: 50px;
}
</style>