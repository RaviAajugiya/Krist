import * as Yup from "yup";

export const loginForm = {
  loginFields: [
    { type: "text", label: "Username", name: "username" },
    { type: "text", label: "Password", name: "password" },
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
    { type: "text", label: "Password", name: "password" },
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
