import styled from "styled-components";

export const AppContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeaderContainerStyled = styled.div`
  width: 100%;
  height: 50px;
`;

export const BodyContainerStyled = styled.div`
  width: 100%;
  height: calc(100% - 50px);
`;

export const FooterContainerStyled = styled.div`
  width: 100%;
  height: 150px;
`;

export const HomeContainerStyled = styled.div`
  flex: 20% 20% 60%;
  display: flex;
`

export const LayoutWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: rgb(234 250 241 / var(--tw-bg-opacity));
  justify-content: center;
  align-items: center;
`