new Vue({
    el: '#app',
    data: {
		title: 'Becoming a Vue ninja',
		name: 'Vanfigo',
		url: 'http://www.youtube.com',
		classes: ['one', 'two']
	},
	methods: {
		greet(time) {
			return `Hello and good ${time}, ${ this.name }`
		}
	}
});