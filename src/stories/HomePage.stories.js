/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Cover from '../components/HomePage/Sections/Cover';
import About from '../components/HomePage/Sections/About';
import Work from '../components/HomePage/Sections/Work';
import Contact from '../components/HomePage/Sections/Contact';

storiesOf('HomePage', module)
  .add('Cover', () => <Cover />)
  .add('About', () => <About />)
  .add('Work', () => <Work />)
  .add('Contact', () => <Contact />);
