import styled from "styled-components";

const RootContainer = styled.section`
  width: 100%;
  min-height: 800px;
  display: flex;
  justify-content: center;
  & > div {
    width: 100%;
    max-width: 1920px;
    height: 100%;
  }
`;

export default function RootLayout({ children }) {
  return (
    <RootContainer>
      <div>{children}</div>
    </RootContainer>
  );
}
