import styled from "styled-components";
import Image from "../../../../common/components/Image";

const StyledSideBar = styled.div`
  border-right: 1px solid #d9d9d9;
  height: 100vh;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
`;

const StyledFooter = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 50px;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  margin-top: auto;
  border-top: 1px solid #d9d9d9;
`;

const StyledHeader = styled.div`
  display: flex;
  gap: 80px;
  height: 35px;
  margin-top: 10px;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
`;

const StyledSearchImage = styled(Image)`
  position: absolute;
  margin-top: 6px;
  background-repeat: no-repeat;
  margin-right: 206px;
  padding-right: 4px;
  border-right: 1px solid #d9d9d9;
`;

const StyledSearch = styled.div`
  width: 260px;
  display: flex;
`;

export {
  StyledFooter,
  StyledBody,
  StyledHeader,
  StyledSideBar,
  StyledSearchImage,
  StyledSearch,
};
