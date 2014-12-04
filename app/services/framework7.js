import Ember from 'ember';

var f7 = new Framework7({
  init: false
});

var preloaderTimeout = null;

export default Ember.Object.extend(f7, {
  showPreloader: function(options = {}) {
    if (options.wait) {
      preloaderTimeout = setTimeout(function() {
        preloaderTimeout = null;
        f7.showPreloader();
      }, options.wait);
    } else {
      f7.showPreloader();
    }
  },

  hidePreloader: function() {
    if (preloaderTimeout) {
      clearTimeout(preloaderTimeout);
      preloaderTimeout = null;
    } else {
      f7.hidePreloader();
    }
  },

  initSwipePanels: function(panels) {
    f7.params.swipePanel = panels;
    f7.initSwipePanels()
  }
});