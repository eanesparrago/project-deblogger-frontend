import React from "react";
import styled from "styled-components";

import CommonLayout from "components/layouts/CommonLayout";
import DashboardLayoutBase from "components/layouts/DashboardLayoutBase";
import FormItem from "components/FormItem";
import QuillEditor from "components/QuillEditor";
import FilledButton from "components/buttons/FilledButton";

const WritePage = () => {
  return (
    <CommonLayout variant="dashboard">
      <S.WritePage as="main">
        <DashboardLayoutBase headingText="Write a Post" withBackButton={true}>
          <form className="WritePage__form-block">
            <div className="WritePage__info-block">
              <FormItem>
                <label htmlFor="writeCategory">Select Category</label>

                <input id="writeCategory" type="text" />
              </FormItem>

              <FormItem>
                <label htmlFor="writeTags">Tags</label>

                <input
                  id="writeTags"
                  type="text"
                  placeholder="Separated by commas e.g. React,Design,Efficiency"
                />
              </FormItem>

              <FormItem>
                <label htmlFor="writeFeaturedImage">Featured Image</label>

                <input id="writeFeaturedImage" type="text" />
              </FormItem>
            </div>

            <FormItem>
              <label htmlFor="writeTitle">Title</label>

              <input id="writeTitle" type="text" />
            </FormItem>

            <div className="WritePage__QuillEditor-wrapper">
              <QuillEditor></QuillEditor>
            </div>

            <FilledButton className="WritePage__publishNow-FilledButton">
              Publish Now
            </FilledButton>
          </form>
        </DashboardLayoutBase>
      </S.WritePage>
    </CommonLayout>
  );
};

const S = {};

S.WritePage = styled.div`
  .WritePage__form-block > * {
    margin-bottom: ${(p) => p.theme.size[32]};
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .WritePage__form-block > * {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  .WritePage__info-block {
    width: 62%;

    > * {
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .WritePage__info-block {
      width: 100%;

      > * {
        margin-bottom: ${(p) => p.theme.size[24]};
      }
    }
  }

  .WritePage__QuillEditor-wrapper {
    color: ${(p) => p.theme.color.dark};
    background-color: ${(p) => p.theme.color.light};

    .ql-editor {
      min-height: ${(p) => p.theme.size.free(512)};
    }
    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      .ql-editor {
        min-height: ${(p) => p.theme.size.free(256)};
      }
    }
  }

  .WritePage__publishNow-FilledButton {
    display: inline-flex;
  }
  @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
    .WritePage__publishNow-FilledButton {
      display: flex;
    }
  }
`;

export default WritePage;
