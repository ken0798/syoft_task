import { useState } from "react";
import Auth from "../../components/auth";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services";
import { handleTimers } from "../../constants";

export default function Register() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    message: "",
    status: "",
  });
  const nav = useNavigate();
  function handleRegisterInput(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, email, password, mobile } = state;
    if (!firstName || !lastName || !email || !password || !mobile) {
      setState((pre) => ({
        ...pre,
        message: "All fields are required",
      }));
      handleTimers(setState, 2000);
      return;
    }
    const reqObj = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_email: email,
      user_password: password,
      user_phone: mobile,
      user_city: "hyderabad",
      user_zipcode: "523127",
    };
    try {
      const res = await registerUser(reqObj);
      const { status, msg } = res;
      setState((pre) => ({
        ...pre,
        message: msg,
        status: status,
      }));
      if (status) {
        nav("/login");
        setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          mobile: "",
          message: "",
          status: "",
        });
      }
      handleTimers(setState, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Auth
      state={state}
      handleInput={handleRegisterInput}
      handleSubmit={handleSubmit}
    />
  );
}
