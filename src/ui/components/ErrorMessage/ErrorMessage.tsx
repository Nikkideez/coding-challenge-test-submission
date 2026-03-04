import React, { FunctionComponent } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => {
  return <div style={{ color: 'red', padding: '0.5em 0' }}>{message}</div>;
};

export default ErrorMessage;
