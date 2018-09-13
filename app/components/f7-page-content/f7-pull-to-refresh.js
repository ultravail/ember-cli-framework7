import { defer } from 'rsvp';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  setupPullToRefresh: function() {
    var _this = this,
    action = this.get('onPullToRefresh');
    if (action) {
      this.$().addClass('pull-to-refresh-content');
      this.set('hasPullToRefresh', true);
      this.get('f7.f7').initPullToRefresh(this.$());
      this.$().on('refresh', function() {
        var deferred = defer();
        deferred.promise.finally(function() {
          _this.get('f7.f7').pullToRefreshDone();
        });
        _this.sendAction('onPullToRefresh', deferred);
      });
    }
  }.on('didInsertElement')
});
