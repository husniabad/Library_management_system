import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Container
} from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import YupValidation from '../components/YupValidation';

function LoginScreen() {
  const initialValue = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    alert(JSON.stringify(values));
    // dispatch(register(values.name, values.email, values.password))

    props.resetForm();
  };
  return (
    <Grid container>
      <Grid
        item
        sm={3}
        xs={false}></Grid>
      <Grid
        item
        sm={6}
        xs={12}>
        <Paper>
          <Box
            m={5}
            p={3}>
            <Typography variant='h5'>Login</Typography>
            <Formik
              initialValues={initialValue}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}>
              {(props) => {
                const { name } = props.values;
                return (
                  <Form>
                    <Field
                      as={TextField}
                      label='Email'
                      type='Email'
                      name='email'
                      fullWidth
                      variant='outlined'
                      margin='dense'
                      helperText={<ErrorMessage name='email' />}
                      error={props.errors.email && props.touched.email}
                      required
                    />
                    <Field
                      as={TextField}
                      label='Password'
                      name='password'
                      type='password'
                      fullWidth
                      variant='outlined'
                      margin='dense'
                      helperText={<ErrorMessage name='password' />}
                      error={props.errors.password && props.touched.password}
                      required
                    />

                    <Button
                      variant='contained'
                      type='submit'
                      color='primary'
                      fullWidth>
                      Submit
                    </Button>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Container>

        <div>You dont have and account? <Link to="/signup">SiugnUp Now!</Link></div>
        </Container>
    </Grid>
  );
}

export default LoginScreen;
