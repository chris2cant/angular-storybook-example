import { wrap } from './wrap.helper';

export const getComponentTemplate = (template, inputDocumentation = '') => {
  const regex = /{{|}}/gi;
  const cleanTemplate = template.replace(regex, '');
  const codeDisplay = `<h4>Code used for this example</h4>
  <div style="margin-top: 16px;">
      <textarea highlight-js="true" [lang]="'html'">
          ${cleanTemplate}
      </textarea>
  </div>`;
  return `
    <style>
        .wrapper {
            margin: 16px;
        }
    </style>
    <div class="wrapper">
        <div>
            ${template}
        </div>
        <h4>Parameters</h4>
        <div style="margin-top: 16px;">
            <textarea highlight-js="true" [lang]="'javascript'">
                ${inputDocumentation || 'Description not available'}
            </textarea>
        </div>
        ${codeDisplay}
    </div>`;
};

export const layout = wrap(
  (content) => `<div style="padding: 16px;">${content}</div>`
);

export const xray = wrap(
  (content) => `<div class="xray-theme">${content}</div>`
);
