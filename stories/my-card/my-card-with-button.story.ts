import { storiesOf, moduleMetadata } from '@storybook/angular';
import { getComponentTemplate } from '../helper/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';
import { MyCardComponent } from 'src/app/my-card/my-card.component';
import { withKnobs, text, files } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { booleanXRay, withXRay } from '../helper/xray.helper.ts';

const modules = {
  imports: [HighlightJsModule],
  declarations: [MyCardComponent]
};

const template = `
<div>
  <h1>My Card</h1>
  <div style="display: flex; justify-content: center;">
    <app-my-card [title]="title" [onClick]="onClick">
      Alaska is a U.S. state in the northwest extremity of the United States West Coast, just across the Bering Strait from Asia.
      The Canadian province of British Columbia and territory of Yukon border the state to the east and southeast.
    </app-my-card>
  </div>
</div>
`;

const params = `
@Input() image: string;
@Input() title: string;
`;

storiesOf('Component.My Card', module)
  .addDecorator(withXRay)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata(modules))
  .add('With Button', () => ({
    template: getComponentTemplate(template, params),
    props: {
      title: text('Title', 'Alaska'),
      image: files('Image', 'jpg', ['assets/alaska.jpg']),
      onClick: action('Action'),
      xrayMode: booleanXRay()
    }
  }));
