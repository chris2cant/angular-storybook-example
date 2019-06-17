import { configure, addParameters } from '@storybook/angular';

addParameters({
  options: {}
});

// Loading stories dynamically
const req = require.context('..', true, /\.story\.ts$/);

// Index page
require('../stories/index.story.ts');

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
