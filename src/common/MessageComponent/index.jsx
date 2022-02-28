import { Alert } from 'react-bootstrap';
import React from 'react';

const MessageComponent = ({ variant, message }) => (
  <Alert variant={variant} className="mt-2">
    {message}
  </Alert>
);

export default MessageComponent;
