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

export const SlideImg = styled.div`
  height: 150px;
  overflow: hidden;
  background-image: url(${props => props.theme.background});
  background-size: cover;
  position: relative;
  border-radius: 10px;
  .slide-image{
    width: 100%;
    height: 100%;
  }
`;

export const SlideTitle = styled.div`
  width: 100%;
  height: 40px;
  background: rgba(0 0 0 / 70%);
  color: #fff;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0px;
  position: absolute;
`;
