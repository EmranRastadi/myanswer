import styled from "styled-components";


export const Disabled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  cursor: not-allowed;
  top: 0px;
  left: 0px;
`;

export const SliderAddBox = styled.div`
  height: 150px;
  width: 150px;
  margin-left: 20px;
  display: flex;
  flex: none;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
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
    top: 0;
    left: 0px;
    cursor: pointer;
  }
`;

export const ClearImg = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9;
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  align-items: center;
  justify-content: center;
  background: rgba(0 0 0 / 70%);
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

export const Style = styled.div`
  .content{
    padding: 0;
    width: 100vw;
    direction: rtl;
    height: 170px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      height: 1em !important;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgrey !important;
      outline: 1px solid slategrey !important;
    }
    
    
    //transform: rotate(-90deg);
    //transform-origin: right top
  }
  
`;

export const SlideImg = styled.div`
  height: 150px;
  width: 150px;
  display: inline-block;
  overflow: hidden;
  background-image: url(${props => props.theme.background});
  background-size: cover;
  position: relative;
  border-radius: 10px;
  &:hover #hover{
    display: flex;
  }
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
