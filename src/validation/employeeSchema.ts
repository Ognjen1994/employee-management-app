import * as Yup from 'yup';

export const EmployeeSchema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(
      /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      'Phone number must be a valid 10-digit number',
    )
    .required('Phone number is required'),
  homeAddress: Yup.object({
    city: Yup.string().required(),
    ZIPCode: Yup.string()
      .matches(/^[0-9]{5}$/, 'Invalid ZIP code format, please check')
      .required('ZIP code is required'),
    addressLine1: Yup.string().required(),
    addressLine2: Yup.string().required(),
  }).required(),
  dateOfEmployment: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date of employment must be a valid ISO 8601 date string')
    .required('Date of employment is required'),
  dateOfBirth: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date of birth must be a valid ISO 8601 date string')
    .required('Date of birth is required'),
});
