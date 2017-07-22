import * as Backbone from 'backbone';

import <%= name %>Collection from './<%= lowerCaseName %>.collection';

describe('<%= name %>Collection', () => {

	let collection;

	beforeEach(() => {
		collection = new <%= name %>Collection();
	});

	it('should be created', () => {
		expect(collection).toBeDefined();
	});

});
