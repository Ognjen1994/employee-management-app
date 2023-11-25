import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';
import './index.scss';

interface ErrorMessageProps {
  name: string;
}

const ErrorMessage = ({ name }: ErrorMessageProps) => {
  return <FormikErrorMessage name={name} component="div" className="error-message" />;
};

export default ErrorMessage;
