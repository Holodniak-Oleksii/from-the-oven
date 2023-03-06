import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  padding: 40px 0 20px 0;
  width: 100%;
  grid-gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
`;
