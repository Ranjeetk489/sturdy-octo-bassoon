import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Lottie from 'lottie-react';
import singupAnimation from '../../../assets/singup.json';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { signup } from "../../../store/slices/AuthenticationSlice/authSlice";
import { clearMessage } from "../../../store/slices/AuthenticationSlice/messageSlice";
import './Signup.css';

const Signup = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });
  const handleSignup = (formValue) => {
    const { username, email, password } = formValue;
    toast.loading("Signing Up...", {
      position: "top-right",
      closeOnClick: true,
      pauseOnHover: true,
      progress: 1,
    })
    setSuccessful(false);
    dispatch(signup({ username, email, password }))
      .unwrap()
      .then(() => {
        toast.dismiss();
        toast.success("Successfuly Signed Up");
        toast.info("Redirecting to Home");
        setSuccessful(true);
      })
      .catch(() => {
        toast.dismiss();
        toast.error("singup failure!");
        setSuccessful(false);
      });
  };
  return (
      <div className="col-md-12 signup-form h-25" >
          <div className="card card-container">
            <Lottie
              animationData={singupAnimation}
              className="sign-icon"
            />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignup}
            >
              <Form>
                {!successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <Field name="username" type="text" className="form-control" />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field name="email" type="email" className="form-control" />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger"
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </div>
                )}
              </Form>
            </Formik>
            <ToastContainer />
          </div>
        {message && (
          <div className="form-group">
            <div
              className={successful ? "alert alert-success" : "alert alert-danger"}
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
      </div>
  );
};
export default Signup;