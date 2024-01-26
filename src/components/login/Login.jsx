import React from "react";
import LoginImg from "./../../assets/login.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import DynamicForm from "../form/DynamicForm";


function Login() {
  const fields = [
    { type: "text", label: "Email address", name: "email" },
    { type: "text", label: "Password", name: "password" },
  ];

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name:
      location.pathname === "/login"
        ? Yup.string()
        : Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  
  return (
    <div className="flex">
      <div>
        <img src={LoginImg} alt="" className="w-full h-full" />
      </div>
      <div>
        <form className="" onSubmit={formik.handleSubmit}>
          <DynamicForm
            fields={fields}
            values={formik.values}
            onChange={handleChange}
            errors={formik.errors}
            touched={formik.touched}
          />          
        </form>
      </div>
    </div>
  );
}

export default Login;
