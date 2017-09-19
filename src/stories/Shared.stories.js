/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from '../components/Shared/Logo.js';
import MainNavigation from '../components/Shared/MainNavigation';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

storiesOf('Shared', module)
  .add('Logo', () => <Logo />)
  .add('MainNavigation', () => <MainNavigation />)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />);
