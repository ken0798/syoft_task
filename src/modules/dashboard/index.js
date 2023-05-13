import styled from "styled-components";
import RootLayout from "../layout";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Header = styled.header`
  background-color: black;
  color: azure;
  padding: 40px;
  > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    background-color: transparent;
    width: 150px;
    height: 40px;
    border: 1px solid azure;
    border-radius: 8px;
    color: azure;
    position: relative;
    z-index: 2;
    overflow: hidden;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right, #6f57e9 99%, black 1%);
      position: absolute;
      z-index: -1;
      transition: transform 1s ease-in-out;
      transform: translateX(-100%);
      left: 0;
      top: 0;
      bottom: 0;
      border-radius: 8px;
    }
    &:hover {
      border: none;
      &::before {
        transform: translateX(0%);
      }
    }
  }
`;

const MainScreen = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    background-color: #6f57e9;
    border-radius: 8px;
    border: none;
    width: 100px;
    height: 40px;
    color: azure;
    &:active {
      outline: none;
    }
  }
`;

const Card = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 8px;
  background-color: #dcddcd;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 296px 536px 245px rgba(21, 31, 72, 0.01),
    167px 302px 207px rgba(21, 31, 72, 0.05),
    74px 134px 153px rgba(21, 31, 72, 0.09),
    19px 34px 84px rgba(21, 31, 72, 0.1), 0px 0px 0px rgba(21, 31, 72, 0.1);
  transition: all 0.8s ease-in-out;
  transform: ${(props) =>
    props.state ? "translateY(400%)" : "translateY(100%)"};
`;

export default function Home() {
  const [ripple, setRipple] = useState(true);
  const nav = useNavigate();
  const localData = localStorage.getItem("USER_DATA");
  if (!localData) {
    return <Navigate to="/login" replace={true} />;
  }
  const user = JSON.parse(localData)[0];
  const handleLog = () => {
    localStorage.removeItem("USER_DATA");
    nav("/login");
  };
  return (
    <RootLayout>
      <Header>
        <nav>
          <h1>Welcome</h1>
          <button onClick={handleLog}>Logout</button>
        </nav>
      </Header>
      <h1 style={{ margin: 16 }}>User Info</h1>
      <MainScreen>
        <p>want to {ripple ? "view" : "hide"} the profile?</p>
        <button onClick={() => setRipple((pre) => !pre)}>
          {ripple ? "view" : "hide"}
        </button>
        <Card state={ripple}>
          <li>_id:{user?.user_id || "N/A"}</li>
          <li>
            name:{user?.user_firstname || "N/"} {user?.user_lastname || "A"}
          </li>
          <li>email:{user?.user_email || "N/A"}</li>
          <li>city:{user?.user_city || "N/A"}</li>
          <li>mobile:{user?.user_phone || "N/A"}</li>
        </Card>
      </MainScreen>
    </RootLayout>
  );
}
