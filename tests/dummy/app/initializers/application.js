import { schedule } from '@ember/runloop';

export function initialize(application) {
  schedule('afterRender', function() {
    container.lookup('service:framework7').initSwipePanels('left');
  });
}

export default {
  name: 'application',
  after: 'framework7-service',
  initialize: initialize
};
