// Create bus for data transfer from cell --> matrix. Avoid passing through matrix-row.
const bus = new Vue();

// 2x2 Matrix component.
Vue.component('two-by-two-matrix', {
	template: `
		<div class="matrix">
			<matrix-row v-for="(rowValues, index) in values"
				:key="index"
				:rowNumber="index"
				:rowValues="rowValues"
			/>
		</div>
	`,

	// Data must return a function in components.
	data: function() {
		var values = [
			[0, 0],
			[0, 0]
		];

		return {
			// All data values in the matrix.
			values: values
		};
	},

	mounted: function() {
		// Add handler to bus events so we receive matrix-cell update events.
		bus.$on('cellUpdate', function(row, col, value) {
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
		}.bind(this));
	},

	updated: function() {
		console.log('parent updated');
	}
});

// Row in a matrix.
Vue.component('matrix-row', {
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
	},

	template: `
		<div class="matrix-row">
			<matrix-cell v-for="(cellValue, index) in rowValues"
				:key="index"
				:value="cellValue"
				:row="rowNumber"
				:col="index"
			/>
		</div>
	`
});

// Single cell in a matrix.
Vue.component('matrix-cell', {
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

	// Template provides an input that triggers parent update callback on value change.
	template: `
		<input 
			type="text" 
			:value="value" 
			@input="updateValue($event)"
			@change="cleanValue"
		>
	`,

	methods: {
		updateValue: function(event) {
			var newValue = parseInt(event.target.value, 10) || 0;
			// Emit the event on the bus.
			bus.$emit('cellUpdate', this.row, this.col, newValue);
		},

		// Used to clean the value
		cleanValue: function($event) {
			console.log(this.value);
		}
	},

	updated: function() {
		console.log('child updated');
	}
});

// Mount app to the DOM.
const app = new Vue({
	el: '#app'
});
