this.Editors = new Meteor.Collection('editors');

Schemas.Editors = new SimpleSchema({
	english_name: {
		type: String,
		max: 60,
	},
	original_name: {
		type: String,
		max: 60,
	},

	slug: {
		type: String,
		max: 200,
		optional: true,
		autoform: {
			type: 'hidden',
			label: false,
		},
	},


	createdAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isInsert) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},
	updatedAt: {
		type: Date,
		optional: true,
		autoValue() {
			if (this.isUpdate) {
				return new Date();
			}
			return null;
		},
		autoform: {
			type: 'hidden',
			label: false,
		},
	},

});

Editors.attachSchema(Schemas.Editors);
Editors.friendlySlugs('english_name');
