new Vue({
    el: '#app',
    data: {
		title: 'Becoming a Vue ninja',
		showName: false
	},
	methods: {
		toggleName() {
			this.showName = !this.showName;
		}
	}
});