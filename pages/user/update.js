import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import FilledButton from "components/buttons/FilledButton";

const UpdateUserPage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.UpdateUserPage as="main">
        <DashboardLayoutBase headingText="Edit Profile" withBackButton={true}>
          <form className="UpdateUserPage__form-block">
            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateUsername">
                Username
              </label>

              <input
                className="FormItem__input"
                id="updateUsername"
                type="text"
              />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateName">
                Name
              </label>

              <input className="FormItem__input" id="updateName" type="text" />
            </S.FormItem>

            <S.FormItem>
              <label className="FormItem__label-text" htmlFor="updateEmail">
                Email
              </label>

              <input
                className="FormItem__input"
                id="updateEmail"
                type="email"
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
              />
            </S.FormItem>

            <FilledButton
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
