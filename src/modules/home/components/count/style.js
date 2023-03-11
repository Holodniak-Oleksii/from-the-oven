import styled from "styled-components";
import { flex_center } from "@/assets/scss/global";

export const Wrapper = styled.div`
  background-color: rgba(234, 233, 233, 0.305);
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 120px 20px;
`;

export const Item = styled.div`
  ${flex_center}
  flex-direction: column;
  font-size: 40px;
  line-height: 44px;
  font-weight: 900;
  &:nth-child(even) {
    color: #fc4734;
  }
  &:nth-child(odd) {
    color: #ffc107;
  }
  span {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;