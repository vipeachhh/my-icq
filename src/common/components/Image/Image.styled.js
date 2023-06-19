import styled from "styled-components";

const StyledImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: ${(props) => props.size};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  object-fit: scale-down;
  cursor: ${(props) => (props.static ? "default" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.static ? "100%" : "70%")};
  }
`;

export default StyledImage;
