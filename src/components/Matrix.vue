<template>
	<div class="matrix">
		<matrix-row v-for="(rowValues, index) in values"
			:key="index"
			:rowNumber="index"
			:rowValues="rowValues"
		/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import MatrixRow from './MatrixRow.vue';

	export default {
		name: 'matrix',

		components: {
			'matrix-row': MatrixRow
		},

		data () {
			var values = [
				[0, 0],
				[0, 0]
			];

			return {
				// All data values in the matrix.
				values: values
			};
		},

		mounted () {
			// Add handler to bus events so we receive matrix-cell update events.
			/*bus.$on('cellUpdate', function(row, col, value) {
				// Validate.
				if (row < 0 || row >= this.values.length) {
					console.error('Invalid row number provided to updateCellValue: ' + row);
					return;
				}
				else if (col < 0 || col >= this.values[row].length) {
					console.error('Invalid column number provided to updateCellValue: ' + col);
					return;
				}

				// Update data. Use set because Vue can't detect bracket syntax.
				Vue.set(this.values[row], col, value);
			}.bind(this));*/
		},

		updated () {
			console.log('parent updated');
		}
	}
</script>

<style>
	
</style>
