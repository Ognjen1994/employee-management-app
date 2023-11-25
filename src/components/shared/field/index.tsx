import React from 'react';
import { Field as FormikField } from 'formik';
import TextField from '@mui/material/TextField';

interface FieldsProps {
  name: string;
  label: string;
}

const Field = ({ name, label }: FieldsProps) => {
  return <FormikField name={name} label={label} as={TextField} fullWidth />;
};

export default Field;
