<template>
	<div class="matrix-row">
			<matrix-cell v-for="(cellValue, index) in rowValues"
				:key="index"
				:value="cellValue"
				:row="rowNumber"
				:col="index"
			/>
		</div>
</template>

<script>
	import MatrixCell from './MatrixCell.vue';

	export default {
		name: 'matrix-row',

		components: {
			'matrix-cell': MatrixCell
		},

		props: {
			// Row number of this row in the matrix.
			rowNumber: {
				type: Number,
				required: true
			},

			// Numerical values of the cells in this row.
			rowValues: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style>

</style>
