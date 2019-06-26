import { boolean } from '@storybook/addon-knobs';

export const booleanXRay = () => {
  return boolean('X-Ray Mode', false);
};

export const withXRay = (story) => {
  document.body.classList.remove('xray');
  console.warn('[story().props.xrayMode]', story().props.xrayMode);
  if (story().props.xrayMode === true) {
    document.body.classList.add('xray');
  }
  return story();
};
