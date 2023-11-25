import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { EmployeeSchema } from '../../validation/employeeSchema';
import { Employee } from '../../types/employee';
import { BUTTON_TEXT, FORM_TITLE } from './config/constants';
import EmployeeGridItem from './EmployeeGridItem';
import { gridItems } from './config/employeeFormConfig';
import useEmployeeActions from '../../hooks/useEmployeeActions';

interface EmployeeFormProps {
  open: boolean;
  onClose: () => void;
  initialEmployee?: Employee;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ open, onClose, initialEmployee }) => {
  const { addNewEmployee, updateExistingEmployee } = useEmployeeActions();

  const isUpdate = !!initialEmployee;
  const buttonText = isUpdate ? BUTTON_TEXT.UPDATE : BUTTON_TEXT.SAVE;
  const formTitle = isUpdate ? FORM_TITLE.UPDATE_EMPLOYEE : FORM_TITLE.ADD_EMPLOYEE;

  const initialValues: Employee =
    initialEmployee ||
    ({
      name: '',
      email: '',
      phoneNumber: '',
      homeAddress: {
        city: '',
        ZIPCode: '',
        addressLine1: '',
        addressLine2: '',
      },
      dateOfEmployment: '',
      dateOfBirth: '',
    } as Employee);

  const handleSubmit = (values: Employee) => {
    isUpdate ? updateExistingEmployee(values) : addNewEmployee(values);
    onClose();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: '40%', paddingTop: '20px', marginBottom: '20px' },
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        {formTitle}
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={EmployeeSchema}
      >
        <Form style={{ marginBottom: '40px' }}>
          <Grid container spacing={2} justifyContent="center">
            {gridItems.map((item, index) => (
              <EmployeeGridItem key={index} name={item.name} label={item.label} />
            ))}
            <Grid item xs={11}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {buttonText}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Drawer>
  );
};

export default EmployeeForm;
