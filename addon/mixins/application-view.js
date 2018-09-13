import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement: function() {
    // initialize swipeout
    if (this.get('f7InitSwipeout') !== false) {
      this.get('f7').initSwipeout();
    }

    // initialize sortable
    if (this.get('f7InitSortable') !== false) {
      this.get('f7').initSortable();
    }
  }
});
