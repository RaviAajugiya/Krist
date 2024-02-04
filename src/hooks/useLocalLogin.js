import { useDispatch } from "react-redux";
import { login } from "./authSlice";

export function useLocalLogin() {
  const dispatch = useDispatch();

  const localData = localStorage.getItem("userData");
  if (localData) {
    dispatch(login(JSON.parse(localData)));
  }
}
