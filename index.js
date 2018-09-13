'use strict';

module.exports = {
  name: require('./package').name,
  included(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('node_modules/framework7/js/framework7.js');
  }
};
