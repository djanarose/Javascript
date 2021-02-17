app = app || {}; //what is this for?

app.models.Person = Backbone.Model.extend({
	defaults: {
		'ID': '',
		'firstname': '',
		'lastname': '',
		'email': '',
		'contactnumber': '',
		'parent': false
	},

	initialize: function() {
		var self = this;
		if (this.get('parent')) {
			self.set('type', 'parent');
		} else {
			self.set('type', 'student');
		}
	}
});

app.collections.People = Backbone.Collection.extend({
	model: app.models.Person,

	comparator: function(person) {
		return person.get('lastname');
	}
});