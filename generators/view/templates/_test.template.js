import * as Backbone from 'backbone';

import App from '../../views/<%= name %>/<%= name %>.view';

describe('<%= name %> view', () => {

  let view;

	beforeAll(() => {
		view = new <%= name %>();
	});

	it('should create', () => {
		expect(view).toBeDefined();
	});

});
