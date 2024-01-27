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
import { login } from "../../redux/authSlice.js";

function Login() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (isLoginPage) {
      setSearchParams({ page: "login" });
    } else {
      setSearchParams({ page: "signup" });
    }
  }, [isLoginPage, setIsLoginPage]);

  const fields = [
    { type: "text", label: "Email address", name: "email" },
    { type: "text", label: "Password", name: "password" },
  ];

  const initialValues = {
    email: "",
    password: "",
  };

  if (!isLoginPage) {
    fields.unshift({
      type: "text",
      label: "Full name",
      name: "name",
    });
    initialValues.name = "";
  }

  const validationSchema = Yup.object().shape({
    name: isLoginPage ? Yup.string() : Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    localStorage.setItem("email", values.email);
    dispatch(login({ email: values.email }));
    setSearchParams({});
    navigate("/");
  };

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="flex gap-4 h-full">
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
              <span onClick={() => setIsLoginPage((prev) => !prev)}>
                {isLoginPage
                  ? "Create New Account"
                  : "Already have an account?"}
              </span>
              <span className="">Forgot Password?</span>
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
