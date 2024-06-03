import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { CompanyDaTaContext } from '../../Context/CompanyData';
import { Button } from '@mui/material';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number is not valid'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});

const StepOne = ({handleNext}) => {
  const {setCompnyInfo,CompnyInfo} =useContext(CompanyDaTaContext)
  const initialValues = {
    name: CompnyInfo?.name || '',
    email: CompnyInfo?.email || '',
    phone: CompnyInfo?.phone || '',
    password: CompnyInfo?.password || '',
    confirmPassword: CompnyInfo?.confirmPassword || '',
  };
  

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setCompnyInfo({...values,...CompnyInfo})
        setSubmitting(false);
    handleNext()
    // resetForm();
  };
console.log(CompnyInfo)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount={true} // Ensure validation on mount
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: '50px auto' }}>
            <Field name="name">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                  helperText={<ErrorMessage name="name" component="div" />}
                />
              )}
            </Field>

            <Field name="email">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                  helperText={<ErrorMessage name="email" component="div" />}
                />
              )}
            </Field>

            <Field name="phone">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                  helperText={<ErrorMessage name="phone" component="div" />}
                />
              )}
            </Field>

            <Field name="password">
              {({ field, meta }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                  helperText={<ErrorMessage name="password" component="div" />}
                />
              )}
            </Field>

            <Field name="confirmPassword">
              {({ field, meta }) => (
                <TextField
                  {...field}  
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={Boolean(meta.touched && meta.error)}
                  helperText={<ErrorMessage name="confirmPassword" component="div" />}
                />
              )}
            </Field>
              {/* {(setValidation({...validations,stepOne:!isValid}))} */}
              <Button type="submit" variant="contained" className={`${!isValid?'disabledBtn':'MainBtn'}`} disabled={isSubmitting || !isValid}>
              Next
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
