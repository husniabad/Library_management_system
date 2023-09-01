import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,  
    Typography
  } from "@material-ui/core";
  import { Formik, Field, Form, ErrorMessage } from "formik";
  import { register } from '../actions/userActions';
import YupValidation from "../components/YupValidation";  
// import Loader from './Loader';
// import Message from './Message';

  const Signup = ({ location, history }) => {

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    console.log("errrrr",userInfo)
  //   const redirect = location.search ? location.search.split('=')[1] : '/'

  //   useEffect(() => {
  //     if (userInfo) {
  //         history.push(redirect)
  //     }
  // }, [history, userInfo, redirect])


    const initialValue = {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };

    const dispatch = useDispatch()

  
    const handleSubmit = (values, props) => {
      console.log(values);
      alert(JSON.stringify(values));
      dispatch(register(values.name, values.email, values.password))
  
      props.resetForm();
    };
  
    return (
      <Grid container>
        <Grid item sm={3} xs={false}></Grid>
        <Grid item sm={6} xs={12} >
          <Paper>
            <Box m={5} p={3} >
              <Typography variant="h5">Sign Up</Typography>
              <Formik
                initialValues={initialValue}
                validationSchema={YupValidation}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { name } = props.values;
                  return (
                    <Form>
                      {/* First Way */}
                      <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        value={name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        helperText={<ErrorMessage name="name" />}
                        error={props.errors.name && props.touched.name}
                        required
                      />
                      {/* Second Way */}
                      <Field
                        as={TextField}
                        label="Email"
                        type="Email"
                        name="email"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        helperText={<ErrorMessage name="email" />}
                        error={props.errors.email && props.touched.email}
                        required
                      />
  
                      <Field
                        as={TextField}
                        label="Phone Number"
                        name="phoneNumber"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        helperText={<ErrorMessage name="phoneNumber" />}
                        error={
                          props.errors.phoneNumber && props.touched.phoneNumber
                        }
                      />
  
                      <Field
                        as={TextField}
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        helperText={<ErrorMessage name="password" />}
                        error={props.errors.password && props.touched.password}
                        required
                      />
  
                      <Field
                        as={TextField}
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        helperText={<ErrorMessage name="confirmPassword" />}
                        error={
                          props.errors.confirmPassword &&
                          props.touched.confirmPassword
                        }
                        required
                      />
  
                     
  
                      <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Paper>
        </Grid>
        <Container>

        <div>alredy have and account? <Link to="/login">login</Link></div>
        </Container>
      </Grid>
    );
  };
  
  export default Signup;
  