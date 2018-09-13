import Component from '@ember/component';
import PullToRefresh from './f7-page-content/f7-pull-to-refresh'
import InfiniteScroll from './f7-page-content/f7-infinite-scroll'

export default Component.extend(PullToRefresh, InfiniteScroll, {
  classNames: ['page-content'],
  hasInfiniteScroll: false,
  hasPullToRefresh: false
});
