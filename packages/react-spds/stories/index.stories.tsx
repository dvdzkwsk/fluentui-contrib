import description from '../README.md';
import { Meta } from '@storybook/react';

export { CardStory as Card } from './components/Card/Card.stories';

export default {
  title: '@fluentui-contrib/react-spds',
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta;
