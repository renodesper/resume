/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import App from '../containers/App';
import HomePage from '../containers/HomePage';

const stories = storiesOf('Container', module);

stories.addDecorator(withKnobs);
stories.add('App', () => <App />);
stories.add('HomePage', () => <HomePage />);
