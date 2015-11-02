module.exports = {
	add: function (a, b) {
		return a + b;
	},

	subtract: function (a, b) {
		return a - b;
	},

	eq: function(a, b){
		if( a === b){
			return true;
		} else {
			return false;
		}
	}
};
