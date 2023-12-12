import React from 'react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

// const Template = (args) => <Header {...args} />;

export const DefaultHeader=() => <Header variant='default'/>
export const secondary=() => <Header variant='secondary'/>