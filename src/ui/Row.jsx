import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      flex-direction: row;
    `}
`;
Row.defaultProps={
    type:'vertical'
}
export default Row;
