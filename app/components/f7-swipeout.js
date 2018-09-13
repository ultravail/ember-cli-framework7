import { scheduleOnce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  classNames: ['swipeout'],

  willDestroyElement: function() {
    var _this = this;
    var parent = this.$().parent();
    var index = parent.children().index(this.$());
    var clone = this.$().clone();
    clone.find('script').remove();
    scheduleOnce('afterRender', function() {
      var elem = parent.children()[index];
      if(elem) {
        $(parent.children()[index]).before(clone);
      } else {
        parent.append(clone);
      }
      _this.get('f7').swipeoutDelete(clone);
    });
  }
});
