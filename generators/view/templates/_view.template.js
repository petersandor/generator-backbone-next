import * as Backbone from 'backbone';
import * as _ from 'underscore';

import { IBaseViewOptions } from '../base/base.view';
import PageView from '../page/page.view';

class <%= name %>View extends Backbone.View<Backbone.Model> {
	page: PageView;

	constructor(options: IBaseViewOptions = {}) {
		super(_.defaults(options, {el: '#root'}));

		console.log('<%= name %> constructor');
	}

	remove(): Backbone.View<Backbone.Model> {
		if (this.page) {
			this.page.remove();
		}

		return this;
	}

	render(): Backbone.View<Backbone.Model> {
		if (this.page) {
			this.page.render();
		}

		return super.render();
	}
}

export default <%= name %>View;
