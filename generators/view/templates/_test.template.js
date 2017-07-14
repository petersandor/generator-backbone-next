import * as Backbone from 'backbone';

import <%= name %> from './<%= lowerCaseName %>.view';

describe('<%= name %> view', () => {

  let view;

	beforeAll(() => {
		view = new <%= name %>();
	});

	it('should create', () => {
		expect(view).toBeDefined();
	});

});
