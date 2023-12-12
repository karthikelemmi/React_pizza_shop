import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Submit } from '../button/Button.stories';
import { Medium } from '../input/Input.stories';

const DummyFormComponent = ({ formTitle, submitButtonText }) => {

  return (
    <form style={{marginTop:"30px"}}>
      <h2>{formTitle}</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <Medium />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="text" className="form-control" id="email" placeholder='email'/>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea className="form-control" id="message" placeholder='message'></textarea>
      </div>
      <Submit/>
    </form>
  );
};


export default DummyFormComponent;