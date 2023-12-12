import React from 'react';
import Footer from './Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default {
  title: 'Footer',
  component: Footer,
};

// const Template = (args) => <Footer {...args} />;

export const DefaultFooter = () => <Footer>
  <p>&copy; 2023 Pizza Delivery App. All rights reserved.</p>
</Footer>