import React from 'react';
import DummyFormComponent from './Form';

export default {
  title: 'Form',
  component: DummyFormComponent,
};

export const ContactUs = () => <DummyFormComponent formTitle="Contact Us" submitButtonText="Submit" />;
export const AdvancedForm = () => <DummyFormComponent formTitle="Advanced Form" submitButtonText="Send Message" />;