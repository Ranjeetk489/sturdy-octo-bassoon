import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Lottie from 'lottie-react';
import loginAnimation from '../../../assets/login.json';
import { login } from "../../../store/slices/authSlice";
import { clearMessage } from "../../../store/slices/messageSlice";
import './Login.css';
const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);
    // const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
    });
    const handleLogin = (formValue) => {
        const { email, password } = formValue;
        toast.loading("Logging In", {
            position: "top-right",
            closeOnClick: true,
            pauseOnHover: true,
            progress: 1,
        })
        setLoading(true);
        setSuccessful(false);
        dispatch(login({ email, password }))
            .unwrap()
            .then(() => {
                // props.history.push("/profile");
                toast.dismiss();
                toast.success('Successfully Logged in');
                setLoading(false);
                setSuccessful(true);
            })
            .catch(() => {
                toast.dismiss();
                toast.error("Login Failed")
                setLoading(false);
                setSuccessful(false);
            });
    };
    // if (isLoggedIn) {
    //     return <Redirect to="/profile" />;
    // }
    return (
            <div className="login-form col-md-12 ">
                <div className="card card-container">
                    <Lottie
                        animationData={loginAnimation}
                        className="animation-icon"
                        autoPlay={false}
                    />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        <Form>
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
                                <Field name="password" type="password" className="form-control" />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Login</span>
                                </button>
                            </div>
                        </Form>
                    </Formik>
                    <ToastContainer />
                </div>
                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </div>
    );
};
export default Login;