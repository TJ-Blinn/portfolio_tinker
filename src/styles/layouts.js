import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;

  @media screen and (max-width: 640px) {
    padding: 4rem;
  }
  @media screen and (max-width: 570px) {
    padding: 2rem 0.4rem;
  }
`;

export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
