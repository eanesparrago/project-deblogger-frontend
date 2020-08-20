import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

import DebloggerLogo from "components/DebloggerLogo";
import UppercaseTextButton from "components/buttons/UppercaseTextButton";
import FilledButton from "components/buttons/FilledButton";

import { signup, authenticate } from "actions/auth";

const SignInPage = () => {
  const router = useRouter();

  const signUpFormInitialState = {
    username: "",
    email: "",
    password: "",
  };

  const [isSignUpFormOpen, setIsSignUpFormOpen] = useState(false);
  const [signUpFormState, setSignUpFormState] = useState({
    ...signUpFormInitialState,
  });

  const handleUpFormChange = (e) => {
    setSignUpFormState({ ...signUpFormState, [e.target.name]: e.target.value });
  };

  const submitSignUpForm = (e) => {
    e.preventDefault();

    console.log(signUpFormState);

    signup({
      user: {
        username: signUpFormState.username,
        email: signUpFormState.email,
        password: signUpFormState.password,
      },
    }).then((data) => {
      if (data.errors) {
        let errorText = "";

        data.errors.forEach((error) => {
          errorText += `${error.msg}\r\n`;
        });

        alert(errorText);
      } else {
        setSignUpFormState({
          ...signUpFormInitialState,
        });
        alert("Sign up successful");

        authenticate(data, () => {
          router.push("/");
        });
      }
    });
  };

  const handleSignUpFormOpenClick = () => {
    setIsSignUpFormOpen(true);
  };

  const handleCloseSignUpFormClick = () => {
    setIsSignUpFormOpen(false);
  };

  return (
    <S.SignInPage>
      <DebloggerLogo
        className="SignInPage__DebloggerLogo"
        size="large"
      ></DebloggerLogo>

      <Link href="/">
        <a className="SignInPage__continue-button">
          <UppercaseTextButton>Continue as Guest</UppercaseTextButton>
        </a>
      </Link>

      <form className="SignInPage__form">
        <S.FormItem className="SignInPage__emailFormItem">
          <label className="FormItem__label-text" htmlFor="logInEmail">
            Email
          </label>

          <input className="FormItem__input" id="logInEmail" type="email" />
        </S.FormItem>

        <S.FormItem className="SignInPage__passwordFormItem">
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

      <div className="SignInPage__divider"></div>

      <UppercaseTextButton as="button" onClick={handleSignUpFormOpenClick}>
        Create New Account
      </UppercaseTextButton>

      {isSignUpFormOpen && (
        <S.SignUpForm className="SignInPage__SignUpForm">
          <UppercaseTextButton
            className="SignUpForm__cancel-button"
            onClick={handleCloseSignUpFormClick}
          >
            Cancel
          </UppercaseTextButton>

          <h2 className="SignUpForm__heading-text">Sign Up</h2>

          <form className="SignUpForm__form" onSubmit={submitSignUpForm}>
            <S.FormItem className="SignUpForm__usernameFormItem">
              <label className="FormItem__label-text" htmlFor="signUpUsername">
                Username
              </label>

              <input
                className="FormItem__input"
                id="signUpUsername"
                type="text"
                name="username"
                onChange={handleUpFormChange}
                value={signUpFormState.username}
                required
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
                name="email"
                onChange={handleUpFormChange}
                value={signUpFormState.email}
                required
              />
            </S.FormItem>

            <S.FormItem className="SignUpForm__passwordFormItem">
              <label className="FormItem__label-text" htmlFor="signUpPassword">
                Password
              </label>

              <input
                className="FormItem__input"
                id="signUpPassword"
                type="password"
                name="password"
                onChange={handleUpFormChange}
                value={signUpFormState.password}
                required
              />
            </S.FormItem>

            <FilledButton as="button" type="submit" fullWidth>
              Sign Up
            </FilledButton>
          </form>
        </S.SignUpForm>
      )}

      {isSignUpFormOpen && (
        <div
          className="SignInPage__dimOverlay"
          onClick={handleCloseSignUpFormClick}
        ></div>
      )}
    </S.SignInPage>
  );
};

const S = {};

S.SignInPage = styled.div`
  padding-top: ${(p) => p.theme.size[96]};
  padding-bottom: ${(p) => p.theme.size[64]};
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-top: ${(p) => p.theme.size[64]};
    padding-left: ${(p) => p.theme.size[16]};
    padding-right: ${(p) => p.theme.size[16]};
  }

  .SignInPage__DebloggerLogo {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__DebloggerLogo {
      font-size: 2em;
    }
  }

  .SignInPage__continue-button {
    margin-bottom: ${(p) => p.theme.size[64]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__continue-button {
      margin-bottom: ${(p) => p.theme.size[48]};
    }
  }

  .SignInPage__form {
    width: ${(p) => p.theme.size.free(384)};
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__form {
      width: 100%;
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .SignInPage__emailFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__emailFormItem {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .SignInPage__passwordFormItem {
    margin-bottom: ${(p) => p.theme.size[24]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__passwordFormItem {
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .SignInPage__divider {
    height: 1px;
    width: ${(p) => p.theme.size.free(512)};
    background-color: ${(p) => p.theme.color.grey};
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__divider {
      width: 100%;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .SignInPage__SignUpForm {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignInPage__SignUpForm {
      top: ${(p) => p.theme.size[16]};
      left: ${(p) => p.theme.size[16]};
      right: ${(p) => p.theme.size[16]};
      transform: none;
    }
  }

  .SignInPage__dimOverlay {
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
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .FormItem__label-text {
      font-size: 1em;
    }
  }

  .FormItem__input {
    height: ${(p) => p.theme.size[48]};
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.grey};
    border-radius: 8px;
    padding-left: ${(p) => p.theme.size[16]};

    &:focus {
      border: 1px solid ${(p) => p.theme.color.lightMuted};
    }
  }
`;

S.SignUpForm = styled.div`
  width: ${(p) => p.theme.size.free(448)};
  padding: ${(p) => p.theme.size[32]};
  background-color: ${(p) => p.theme.color.dark};
  border-radius: 8px;
  box-shadow: ${(p) => p.theme.shadow.big};
  position: relative;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    width: unset;
    padding: ${(p) => p.theme.size[24]} ${(p) => p.theme.size[16]};
  }

  .SignUpForm__cancel-button {
    position: absolute;
    top: ${(p) => p.theme.size[8]};
    right: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignUpForm__cancel-button {
      right: ${(p) => p.theme.size[24]};
    }
  }

  .SignUpForm__heading-text {
    font-family: ${(p) => p.theme.font.serif};
    font-size: 2em;
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignUpForm__heading-text {
      margin-bottom: ${(p) => p.theme.size[64]};
    }
  }

  .SignUpForm__usernameFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignUpForm__usernameFormItem {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .SignUpForm__emailFormItem {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignUpForm__emailFormItem {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .SignUpForm__passwordFormItem {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .SignUpForm__passwordFormItem {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
`;

export default SignInPage;
