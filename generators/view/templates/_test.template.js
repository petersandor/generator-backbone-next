import * as Backbone from 'backbone';

import <%= name %>View from './<%= lowerCaseName %>.view';

describe('<%= name %> view', () => {

  let view;

	beforeEach(() => {
		view = new <%= name %>View();
	});

	it('should create', () => {
		expect(view).toBeDefined();
	});

});
