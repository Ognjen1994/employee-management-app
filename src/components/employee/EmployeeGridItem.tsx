import React from 'react';
import Grid from '@mui/material/Grid';
import Field from '../shared/field';
import ErrorMessage from '../shared/errorMessage';

interface EmployeeGridItem {
  name: string;
  label: string;
  xs?: number;
}

const EmployeeGridItem = ({ name, label, xs = 11 }: EmployeeGridItem) => {
  return (
    <Grid item xs={xs}>
      <Field name={name} label={label} />
      <ErrorMessage name={name} />
    </Grid>
  );
};

export default EmployeeGridItem;
