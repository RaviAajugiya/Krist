import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";

export const authHelper = () => {
  const dispatch = useDispatch();

  const localData = localStorage.getItem("userData");
  // console.log(localData, "localData");

  if (localData) {
    dispatch(login(JSON.parse(localData)));
    // console.log(JSON.parse(localData));
  }

  //   if (userData || dt) {
  //     console.log("if");
  //     dispatch(login(userData));
  //     setIsLogin(true);
  //   } else {
  //     console.log("else");
  //     setIsLogin(false);
  //   }
};
