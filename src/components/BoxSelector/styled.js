import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  color: white;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;

  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  height: 377px;
  border-radius: 33px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);
`;
export const BoxGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(2, 1fr);

  cursor: pointer;
`;
export const BoxItem = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 98px;
  height: 91px;

  border-bottom: 1px solid
    ${({ selected }) => (selected ? "#FEF7E2" : "transparent")};

  cursor: pointer;

  &:hover {
    border-bottom: 1px solid
      ${({ selected }) => (selected ? "#FEF7E2" : "#transparent")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const buttonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid #fef7e2;
  background: #532a13;
  color: #fef7e2;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 20.4px */
`;
