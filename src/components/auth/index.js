import { randomPickImage, heroPics } from "../../constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import RootLayout from "../../modules/layout";

const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
  /* padding: 16px; */
  /* place-items: center; */
  min-height: 800px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Welcome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #000;
  padding: 16px;
  h1 {
    font-size: 36px;
    font-weight: 600;
  }
  p {
    margin-block: 16px;
  }
  & > div {
    max-width: 70%;
    /* margin-block-end: 16px; */
    @media (max-width: 760px) {
      max-width: 100%;
    }
    & > div {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-block-start: 16px;
    }
  }
`;

const HeroPic = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  & img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-inline: 24px;
  h1 {
    font-size: 32px;
  }
  & > p {
    margin-block: 20px;
  }
  span,
  a {
    color: #6f57e9;
    text-decoration: none;
  }
  @media (max-width: 760px) {
    width: 100%;
    max-width: 80%;
    place-self: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  label {
    &::after {
      content: "*";
    }
  }
  & input {
    height: 40px;
    border: 1px solid #dcddcc;
    padding-left: 16px;
    border-radius: 8px;
    &:focus {
      outline: 1px solid #6f57e9;
    }
    &[type="checkbox"]:focus {
      outline: none;
    }
  }
  & div:first-of-type {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  & button {
    background-color: #6f57e9;
    border: none;
    border-radius: 8px;
    padding-block: 12px;
    color: #fff;
    margin-block: 16px;
  }
  .sym {
    position: absolute;
    bottom: 140px;
    right: 16px;
    z-index: 2;
    cursor: pointer;
  }
`;

const Message = styled.p`
  color: ${(props) => (props.status ? "green" : "red")};
  &::after {
    content: "${(props) => (props.status ? "" : "*")}";
  }
`;

function Auth({ login, state, handleInput, handleSubmit }) {
  const [view, setView] = useState(false);
  const [policy, setPolicy] = useState(true);

  return (
    <RootLayout>
      <AuthContainer>
        <Welcome>
          <div>
            <h1>Welcome to Our Community</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus doloremque inventore veritatis, non doloribus
              ratione.
            </p>
            <div>
              <HeroPic>
                {heroPics.map((image, id) => (
                  <div className="hero_pic" key={id}>
                    <img src={randomPickImage(image).thumbnail} alt="" />
                  </div>
                ))}
              </HeroPic>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </Welcome>
        <FormContainer>
          <h1>{login ? "Log In" : "Sign Up"}</h1>
          <p>
            {login ? "Not a user?" : " Already have an account?"}{" "}
            <Link to={login ? "/register" : "/login"}>{`Sign ${
              login ? "up" : "in"
            } `}</Link>{" "}
          </p>
          <Form onSubmit={handleSubmit}>
            {!login && (
              <>
                <label htmlFor="first-name">First Name</label>
                <input
                  value={state.firstName}
                  name="firstName"
                  onChange={handleInput}
                />
                <label htmlFor="last-name">last Name</label>
                <input
                  value={state.lastName}
                  name="lastName"
                  onChange={handleInput}
                />
                <label htmlFor="employer">mobile</label>
                <input
                  pattern="[0-9]{10}"
                  title="must have 10 digits*"
                  name="mobile"
                  onChange={handleInput}
                  value={state.mobile}
                />
              </>
            )}
            <label htmlFor="email">Email address</label>
            <input
              value={state.email}
              type="email"
              name="email"
              onChange={handleInput}
            />
            <label htmlFor="password">password</label>
            <input
              name="password"
              type={view ? "text" : "password"}
              onChange={handleInput}
              value={state.password}
            />
            {!login && (
              <div>
                <input
                  checked={policy}
                  name="policy"
                  type="checkbox"
                  value={policy}
                  onChange={(e) => setPolicy(e.target.checked)}
                />
                <p>
                  I agree to <span>terms</span> and <span>policy</span>{" "}
                </p>
              </div>
            )}
            <button type="submit">
              {login ? "Log into your account" : "Create your free account"}
            </button>
            {state.password.length ? (
              view ? (
                <AiOutlineEye
                  onClick={() => setView((pre) => !pre)}
                  style={{
                    bottom: !login ? "140px" : "93px",
                  }}
                  className="sym"
                />
              ) : (
                <AiOutlineEyeInvisible
                  onClick={() => setView((pre) => !pre)}
                  style={{
                    bottom: !login ? "140px" : "93px",
                  }}
                  className="sym"
                />
              )
            ) : null}
          </Form>
          {state.message && (
            <Message status={state.status}>{state.message}</Message>
          )}
        </FormContainer>
      </AuthContainer>
    </RootLayout>
  );
}

export default Auth;
