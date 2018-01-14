import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon', function() {
    this.route('list');
    this.route('detail');
    this.route('detail', { path: 'detail/:id' });
    this.route('edit');
    this.route('edit', { path: 'edit/:id' });
    this.route('new');
  });
});

export default Router;
