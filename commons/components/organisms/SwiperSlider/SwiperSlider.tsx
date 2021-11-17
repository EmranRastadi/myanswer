import {Store} from "@organisms/StoreProvider/StoreProvider";
import _ from 'lodash'
import types from "@utils/types";
import Cookies from "js-cookie";
import {v4 as uuid} from "uuid";
import {Style} from "@utils/style";
import React, {useContext} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {PlusBox, SlideShow} from "@molecules/index";
import {Banner} from "@templates/Luncher/Luncher";
const grid = 8;
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  userSelect: "none",
  borderRadius: '10px',
  margin: `0 ${grid}px 0 0`,
  background: isDragging ? "lightgreen" : "#fff",
  ...draggableStyle
});
export interface Slide {
  id: string,
  name: string,
  file: any
}
function SwiperSlider(props: any) {
  const {state, dispatch} = useContext(Store)
  const getListStyle = (isDraggingOver: any, slidesLength: any) => ({
    display: "flex",
    width: (slidesLength * 155 + 10) + "px",
  });
  const addSlide = (e: React.ChangeEvent<any>) => {
    let banners = state.banners;
    let target = e.target.files[0];
    let banner = _.find(banners, (item) => {
      return item.id === props.id
    })
    let indexOf = banners.indexOf(banner);
    if (banner) {
      let alreadyExist = _.find(banner.slides, (slide) => {
        return slide.file === URL.createObjectURL(target);
      })
      if (!alreadyExist) {
        banner.slides.push({
          id: uuid(),
          name: `اسلاید ${banner.slides.length + 1}`,
          file: URL.createObjectURL(target)
        })
        let fitBannerSlides = _.reverse(banner.slides);
        banner.slides = fitBannerSlides;
        banners[indexOf] = banner;
        dispatch({
          type: types.ADD_BANNER,
          payload: banners
        })
        Cookies.set("initialState", JSON.stringify(banners))
        // localStorage.setItem("initialState" , JSON.stringify(banners))
      }
    }
  }
  const onDragHandler = (result: any) => {
    let banners = state.banners;
    const {destination, source} = result
    if (!destination) return;
    let bannerDrop = _.find(banners, (i: Banner) => {
      return i.id === source.droppableId
    });
    let indexOfBanner = banners.indexOf(bannerDrop);
    let bannerCopy = [...bannerDrop.slides];
    let [removed] = bannerCopy.splice(source.index, 1);
    bannerCopy.splice(destination.index, 0, removed)
    banners[indexOfBanner].slides = bannerCopy;
    dispatch({
      type: types.ADD_BANNER,
      payload: banners
    })
  }
  const  _renderAddSlide = () => {
    if(props.slides.length === 5){
      return (
        <PlusBox file={true} disabled={true} title={"افزودن اسلاید"}/>
      )
    } else{
      return (
        <PlusBox file={true} onPickupFile={addSlide} title={"افزودن اسلاید"}/>
      )
    }
  }
  return (
    <Style>
      <div className={"drag-container"}>
        <DragDropContext onDragEnd={onDragHandler}>
          <PlusBox hasIcon={"none"} title={props.name}/>
          <div className={"drop-container"}>
            <Droppable droppableId={props.id} direction="horizontal">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver, props.slides?.length)}
                  {...provided.droppableProps}
                >
                  {props.slides.map((item: Slide, index: number) => {
                    return (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <div>
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <SlideShow bannerId={props.id} {...item}/>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          {_renderAddSlide()}
        </DragDropContext>
      </div>
    </Style>
  );
}
export default SwiperSlider
