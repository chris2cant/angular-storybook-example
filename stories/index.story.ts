import { storiesOf, moduleMetadata } from '@storybook/angular';

const modules = {
  imports: [],
  declarations: []
};

storiesOf('Muesli', module)
  .addDecorator(moduleMetadata(modules))
  .add('Welcome !', () => ({
    template: `
    	<div>
    		Welcome
    	</div>
    `
  }));
