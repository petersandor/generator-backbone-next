import * as Backbone from 'backbone';
import { tagName, template } from 'backbone-decorators';

import { BaseView } from '../base/base.view';

@tagName('<%= lowerCaseName %>')
@template(require('./<%= lowerCaseName %>.template.hbs'))
class <%= name %>View extends BaseView {

}

export default <%= name %>View;
