import * as Yup from "yup";

export const loginForm = {
  loginFields: [
    { type: "text", label: "Username", name: "username" },
    { type: "password", label: "Password", name: "password" },
    // {
    //   type: "dropdown",
    //   options: [
    //     { label: "op1", value: "op1" },
    //     { label: "op2", value: "op2" },
    //   ],
    //   label: "select",
    //   name: "select",
    // },
  ],

  LoginValidationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  }),

  loginInitialValues: {
    username: "",
    password: "",
  },
};

export const registerForm = {
  registerFields: [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" },
  ],

  registerInitialValues: {
    username: "",
    email: "",
    password: "",
  },

  RegisterValidationSchema: Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  }),
};

