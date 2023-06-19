import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding-left: ${(props) => props.leftIndent};
  height: 25px;
  border-radius: 15px;
`;

export default StyledInput;
