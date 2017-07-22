import * as Backbone from 'backbone';

import <%= name %>Model from './<%= lowerCaseName %>.model';

describe('<%= name %>Model', () => {

	let model;

	beforeEach(() => {
		model = new <%= name %>Model();
	});

	it('should be created', () => {
		expect(model).toBeDefined();
	});

});
