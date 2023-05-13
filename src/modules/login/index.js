import { useState } from "react";
import Auth from "../../components/auth";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services";
import { handleTimers } from "../../constants";

export default function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
    message: "",
    status: "",
  });
  const nav = useNavigate();
  const handleLogInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      setState((pre) => ({
        ...pre,
        message: "All fields are required",
      }));
      handleTimers(setState, 2000);
      return;
    }
    const reqObj = {
      user_email: email,
      user_password: password,
    };
    try {
      const res = await loginUser(reqObj);
      const { status, msg, user_data: userInfo } = res;
      setState((pre) => ({
        ...pre,
        message: msg,
        status: status,
      }));
      if (status) {
        localStorage.setItem("USER_DATA", JSON.stringify(userInfo));
        nav("/");
        setState({ email: "", password: "", message: "", status: "" });
      }
      handleTimers(setState, 2000);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Auth
      login
      state={state}
      handleInput={handleLogInput}
      handleSubmit={handleSubmit}
    />
  );
}
