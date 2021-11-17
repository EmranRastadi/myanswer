import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {PlusBox, SlideShow} from "@molecules/index";
import {Row} from "react-bootstrap";
import React, {ChangeEvent, useContext} from "react";
import {Store} from "@organisms/StoreProvider/StoreProvider";
import _ from 'lodash'
import types from "@utils/types";
import Cookies from "js-cookie";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export default function SwiperSlider(props: any) {
  const {state, dispatch} = useContext(Store)

  const addSlide = (e: any) => {

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
          name: `اسلاید ${banner.slides.length + 1}`,
          file: URL.createObjectURL(target)
        })

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

  }


  return (

    <DragDropContext onDragEnd={onDragHandler}>

      <Row style={{marginBottom: '20px'}}>
        <Droppable droppableId={props.id}>
          {(provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Swiper
                spaceBetween={50}
                dir={"rtl"}
                slidesPerView={3}
                breakpoints={{
                  "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                  },
                  "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                  },
                  "1024": {
                    "slidesPerView": 5,
                    "spaceBetween": 50
                  }
                }}
              >

                <SwiperSlide>
                  <PlusBox hasIcon={"none"} title={props.name}/>
                </SwiperSlide>


                {props.slides?.length && props.slides.map((item: any, index: number) => (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
                    {(providedDrag) => (
                      <SwiperSlide key={index}>
                        <SlideShow img={item.file} name={item.name}/>
                      </SwiperSlide>
                    )}

                  </Draggable>

                ))}
                <SwiperSlide>
                  <PlusBox file={true} onPickupFile={addSlide} title={"افزودن اسلاید"}/>
                </SwiperSlide>
              </Swiper>

              {provided.placeholder}
            </div>
          ))}
        </Droppable>

      </Row>

    </DragDropContext>


  )
}