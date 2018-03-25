<template>
	<div v-bind:class="{ 'check-filter': true, active: checked }" v-on:click="checkFilter">
		<span class="checkbox"></span>
		<span class="check-filter-title">{{ name }}</span>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				checked: false,
			};
		},
		props: ["name"],
		methods: {
			checkFilter() {
				this.checked = !this.checked;
				this.$emit("check-filter", "genre", this.name, this.checked);
			},
		},
	}
</script>