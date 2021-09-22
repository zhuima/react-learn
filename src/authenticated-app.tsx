import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { UserAuth } from "./context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = UserAuth();

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <h3>logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  height: 100vh;
`;

// const PageHeader = styled.header`
// background-color: gray;
// height: 6rem;
// `

const Main = styled.main`
  /* height: calc(100vh - 6rem); */
  grid-area: main;
`;

const Header = styled.header`
  background: gray;
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div``;

// const Nav = styled.nav`
// grid-area: nav;
// `

// const Aside = styled.aside`
// grid-area: aside;
// `

// const Footer = styled.footer`
// grid-area: footer;
// `
