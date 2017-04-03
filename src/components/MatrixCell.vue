<template>
	<input 
			type="text" 
			:value="value" 
			@input="updateValue($event)"
			@change="cleanValue($event)"
		>
</template>

<script>
	export default {
		name: 'matrix-cell',

		props: {
			// Value in this cell.
			value: {
				type: Number,
				default: 0
			},

			// Row location in matrix.
			row: {
				type: Number,
				required: true
			},

			// Column location in matrix.
			col: {
				type: Number,
				required: true
			}
		},

		methods: {
			updateValue: function(event) {
				var newValue = parseInt(event.target.value, 10) || 0;
				// Emit the event on the bus.
				//bus.$emit('cellUpdate', this.row, this.col, newValue);
			},

			// Used to clean the value
			cleanValue: function($event) {
				console.log(this.value);
			}
		},

		updated () {
			console.log('child updated');
		}
	}
</script>

<style>

</style>