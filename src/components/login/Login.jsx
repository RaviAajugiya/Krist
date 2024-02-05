import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import LoginImg from "./../../assets/login.png";
import signUpImg from "./../../assets/signIn.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import DynamicForm from "../form/DynamicForm";
import Button from "../common/Button";
import Logo from "./../common/Logo.jsx";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../redux/api/authApi.js";
import { loginForm, registerForm } from "../config/constant.js";

function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [authLogin, { data: loginData }] = useLoginMutation();
  const [authRegister, { data: registerData }] = useRegisterMutation();

  useEffect(() => {
    if (loginData) {
      localStorage.setItem("userData", JSON.stringify(loginData));
      dispatch(login(loginData));
      navigate("/");
    }
    if (registerData) {
      setIsLoginPage(true)
    }
  }, [loginData, registerData]);

  const fields = isLoginPage
    ? loginForm.loginFields
    : registerForm.registerFields;

  const initialValues = isLoginPage
    ? loginForm.loginInitialValues
    : registerForm.registerInitialValues;

  const validationSchema = isLoginPage
    ? loginForm.LoginValidationSchema
    : registerForm.RegisterValidationSchema;

  const onSubmit = (values) => {
    isLoginPage ? authLogin(values) : authRegister(values);
  };

  useEffect(() => {
    if (isLoginPage) {
      setSearchParams({ page: "login" });
    } else {
      setSearchParams({ page: "signup" });
    }
  }, [isLoginPage, setIsLoginPage]);

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex gap-4 h-screen">
      <div className="hidden lg:block lg:justify-around h-svh overflow-hidden w-fit mix-blend-multiply">
        <img
          src={isLoginPage ? LoginImg : signUpImg}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col justify-center px-4 lg:w-2/5 max-w-[600px] m-auto lg:m-auto ">
        <div className="mb-7">
          <Logo className="w-36 m-auto mb-8" />
          <h2 className="text-3xl text-primary-color">welcome</h2>
          <p className="text-base text-light-grey">
            Please {isLoginPage ? "login" : "sign up"} here
          </p>
        </div>
        <div>
          <form
            className="flex w-full  m-auto flex-col gap-4"
            onSubmit={formik.handleSubmit}
          >
            <DynamicForm
              fields={fields}
              values={formik.values}
              onChange={handleChange}
              errors={formik.errors}
              touched={formik.touched}
            />
            <div className="text-base text-right flex justify-between">
              <span className="cursor-pointer" onClick={() => setIsLoginPage((prev) => !prev)}>
                {isLoginPage
                  ? "Create New Account"
                  : "Already have an account?"}
              </span>
              <span className="cursor-pointer">Forgot Password?</span>
            </div>
            <Button className="mt-4" type="submit">
              {isLoginPage ? "login" : "sign up"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
