import { configure } from '@kadira/storybook';
import 'todomvc-app-css/index.css'

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);

if (typeof window === 'object') {
  window.__storybook_stories__ = require('@kadira/storybook').getStorybook();
}
