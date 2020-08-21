import styled from "styled-components";
import { useState, useEffect } from "react";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import FilledButton from "components/buttons/FilledButton";

import { getAuth, updateAuth } from "actions/auth";
import { getProfile, updateUser } from "actions/user";

const UpdateUserPage = () => {
  const auth = getAuth();

  const intialformState = {
    photo: "",
    username: "",
    name: "",
    email: "",
    bio: "",
    password: "",
  };

  const [formState, setFormState] = useState({
    ...intialformState,
  });

  const init = () => {
    getProfile(auth.token).then((data) => {
      if (data.error) {
        alert("An error occurred");
      } else {
        console.log("data", data);

        setFormState({
          username: data.user.username,
          name: data.user.name ? data.user.name : "",
          email: data.user.email,
          bio: data.user.bio,
        });
      }
    });
  };

  const formChange = (e) => {
    setFormState({ ...formState, [e.target.name]: [e.target.value] });
  };

  const changePhoto = (e) => {
    setFormState({ ...formState, photo: e.target.files[0] });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", formState.username);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("bio", formState.bio);
    formData.append("photo", formState.photo);

    if (formState.password) {
      formData.append("password", formState.password);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    updateUser(auth.token, formData).then((data) => {
      if (data.error) {
        alert("An error updating the user occurred. Try again.");
      } else {
        updateAuth(data.user, () => {
          setFormState({
            username: data.user.username,
            name: data.user.name ? data.user.name : "",
            email: data.user.email,
            bio: data.user.bio,
            photo: "",
            password: "",
          });
        });

        setFormState({
          username: data.user.username,
          name: data.user.name ? data.user.name : "",
          email: data.user.email,
          bio: data.user.bio,
          photo: "",
          password: "",
        });

        alert("User update success!");
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <CommonLayout variant="dashboard">
      <S.UpdateUserPage as="main">
        <DashboardLayoutBase headingText="Edit Profile" withBackButton={true}>
          <form className="UpdateUserPage__form-block" onSubmit={submitForm}>
            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updatePhoto">
                Photo
              </label>

              <input
                id="updatePhoto"
                type="file"
                accept="image*"
                onChange={changePhoto}
              />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateUsername">
                Username
              </label>

              <input
                className="FormItem__input"
                id="updateUsername"
                type="text"
                value={formState.username}
                name="username"
                onChange={formChange}
              />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateName">
                Name
              </label>

              <input
                className="FormItem__input"
                id="updateName"
                type="text"
                value={formState.name}
                name="name"
                onChange={formChange}
              />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateEmail">
                Email
              </label>

              <input
                className="FormItem__input"
                id="updateEmail"
                type="email"
                value={formState.email}
                name="email"
                onChange={formChange}
              />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateBio">
                Bio
              </label>

              <textarea
                className="FormItem__textareaInput"
                name="bio"
                id="updateBio"
                rows="5"
                value={formState.bio}
                name="bio"
                onChange={formChange}
              ></textarea>
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updatePassword">
                Password
              </label>

              <input
                className="FormItem__input"
                id="updatePassword"
                type="password"
                name="password"
                value={formState.password}
                onChange={formChange}
              />
            </S.FormItem>

            <FilledButton
              as="button"
              className="UpdateUserPage__save-FilledButton"
              type="submit"
            >
              Save Changes
            </FilledButton>
          </form>
        </DashboardLayoutBase>
      </S.UpdateUserPage>
    </CommonLayout>
  );
};

const S = {};

S.UpdateUserPage = styled.div`
  .UpdateUserPage__SearchBox {
    margin-bottom: ${(p) => p.theme.size[48]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    .UpdateUserPage__SearchBox {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .UpdateUserPage__form-block {
    width: 62%;

    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .UpdateUserPage__form-block {
      width: 100%;

      > *:not(:last-child) {
        margin-bottom: ${(p) => p.theme.size[24]};
      }
    }
  }

  .UpdateUserPage__save-FilledButton {
    display: inline-flex;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .UpdateUserPage__save-FilledButton {
      display: flex;
    }
  }
`;

S.FormItem = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    flex-flow: column;
    align-items: flex-start;
  }

  .FormItem__label-text {
    display: block;
    font-size: 1.1875em;
    color: ${(p) => p.theme.color.lightMuted};
    width: ${(p) => p.theme.size.free(87)};
    margin-right: ${(p) => p.theme.size[32]};
    flex-shrink: 0;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .FormItem__label-text {
      width: unset;
      margin-bottom: ${(p) => p.theme.size[12]};
      margin-right: 0;
    }
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

  .FormItem__textareaInput {
    width: 100%;
    border: 1px solid ${(p) => p.theme.color.grey};
    border-radius: 8px;
    padding: ${(p) => p.theme.size[16]};
    line-height: 150%;

    &:focus {
      border: 1px solid ${(p) => p.theme.color.lightMuted};
    }
  }
`;

export default UpdateUserPage;
