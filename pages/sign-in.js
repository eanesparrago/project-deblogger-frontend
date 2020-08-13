import { useState } from "react";
import styled from "styled-components";

import DebloggerLogo from "components/DebloggerLogo";
import UppercaseTextButton from "components/UppercaseTextButton";
import FilledButton from "components/FilledButton";

const S = {};

S.SignIn = styled.div`
  padding-top: ${(p) => p.theme.size[96]};
  display: flex;
  flex-flow: column;
  align-items: center;

  .SignIn__DebloggerLogo {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignIn__continue-button {
    margin-bottom: ${(p) => p.theme.size[64]};
  }

  .SignIn__form {
    width: ${(p) => p.theme.size.free(384)};
    margin-bottom: ${(p) => p.theme.size[48]};
  }

  .SignIn__emailFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignIn__passwordFormItem {
    margin-bottom: ${(p) => p.theme.size[24]};
  }

  .SignIn__divider {
    height: 1px;
    width: ${(p) => p.theme.size.free(512)};
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignIn__SignUpForm {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .SignIn__dimOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(p) => p.theme.color.bg};
    opacity: 0.8;
  }
`;

S.FormItem = styled.div`
  .FormItem__label-text {
    display: block;
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    margin-bottom: ${(p) => p.theme.size[12]};
  }

  .FormItem__input {
    height: ${(p) => p.theme.size[48]};
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.grey};
    border-radius: 8px;
    padding-left: ${(p) => p.theme.size[16]};
  }
`;

S.SignUpForm = styled.div`
  width: ${(p) => p.theme.size.free(448)};
  padding: ${(p) => p.theme.size[32]};
  background-color: ${(p) => p.theme.color.dark};
  border-radius: 8px;
  box-shadow: ${(p) => p.theme.shadow.big};
  position: relative;

  .SignUpForm__cancel-button {
    position: absolute;
    top: ${(p) => p.theme.size[8]};
    right: ${(p) => p.theme.size[32]};
  }

  .SignUpForm__heading-text {
    font-family: ${(p) => p.theme.font.serif};
    font-size: 2em;
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignUpForm__usernameFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignUpForm__emailFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .SignUpForm__passwordFormItem {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
`;

const SignIn = () => {
  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);

  const handleSignUpFormOpenClick = () => {
    setIsSignUpFormOpen(true);
  };

  const handleCloseSignUpFormClick = () => {
    setIsSignUpFormOpen(false);
  };

  return (
    <S.SignIn>
      <DebloggerLogo
        className="SignIn__DebloggerLogo"
        size="large"
      ></DebloggerLogo>

      <UppercaseTextButton className="SignIn__continue-button">
        Continue Without an Account
      </UppercaseTextButton>

      <form className="SignIn__form">
        <S.FormItem className="SignIn__emailFormItem">
          <label className="FormItem__label-text" htmlFor="logInEmail">
            Email
          </label>

          <input className="FormItem__input" id="logInEmail" type="email" />
        </S.FormItem>

        <S.FormItem className="SignIn__passwordFormItem">
          <label className="FormItem__label-text" htmlFor="logInPassword">
            Password
          </label>

          <input
            className="FormItem__input"
            id="logInPassword"
            type="password"
          />
        </S.FormItem>

        <FilledButton className="FilledButton" type="submit">
          Log In
        </FilledButton>
      </form>

      <div className="SignIn__divider"></div>

      <UppercaseTextButton as="button" onClick={handleSignUpFormOpenClick}>
        Create New Account
      </UppercaseTextButton>

      {isSignUpFormOpen && (
        <S.SignUpForm className="SignIn__SignUpForm">
          <UppercaseTextButton
            className="SignUpForm__cancel-button"
            onClick={handleCloseSignUpFormClick}
          >
            Cancel
          </UppercaseTextButton>

          <h2 className="SignUpForm__heading-text">Sign Up</h2>

          <form className="SignUpForm__form">
            <S.FormItem className="SignUpForm__usernameFormItem">
              <label className="FormItem__label-text" htmlFor="signUpUsername">
                Username
              </label>

              <input
                className="FormItem__input"
                id="signUpUsername"
                type="email"
              />
            </S.FormItem>

            <S.FormItem className="SignUpForm__emailFormItem">
              <label className="FormItem__label-text" htmlFor="signUpEmail">
                Email
              </label>

              <input
                className="FormItem__input"
                id="signUpEmail"
                type="email"
              />
            </S.FormItem>

            <S.FormItem className="SignUpForm__passwordFormItem">
              <label className="FormItem__label-text" htmlFor="signUpPassword">
                Password
              </label>

              <input
                className="FormItem__input"
                id="signUpPassword"
                type="email"
              />
            </S.FormItem>

            <FilledButton type="submit">Sign Up</FilledButton>
          </form>
        </S.SignUpForm>
      )}

      {isSignUpFormOpen && <div className="SignIn__dimOverlay"></div>}
    </S.SignIn>
  );
};

export default SignIn;
