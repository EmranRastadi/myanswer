import styled from "styled-components";

export const SliderAddBox = styled.div`
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #aaa;
  cursor: pointer;
  border: 1px dashed #ccc;
  &.active{
    background: #bbdefb ;
    color: #212121;
    cursor: not-allowed;
  }
  .input-files{
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

export const RoundedIcon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  color: #ccc;
  border-radius: 50px;
  border: 1px solid #ccc;
  img{
    width: 20px;
    height: 20px;
    opacity: 0.4;
  }
`;