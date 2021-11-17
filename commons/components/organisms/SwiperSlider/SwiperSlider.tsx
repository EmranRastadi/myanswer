import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {PlusBox} from "@molecules/index";
import {Row} from "react-bootstrap";
import React, {ChangeEvent, useContext} from "react";
import {Store} from "@organisms/StoreProvider/StoreProvider";
import _ from 'lodash'

export default function SwiperSlider(props: any) {
  const {state , dispatch} = useContext(Store)

  const addSlide = (e: any) => {

    let banner = _.find(state.banners, (item) => {
      return item.id === props.id
    })

    if (banner && banner.slides.length > 0) {
      let indexOf = state.banners.indexOf(banner)
      let alreadyExist = _.find(banner.slides, (slide) => {
        return slide.path === e.target.files[0];
      })
      if (!alreadyExist) {
        banner.slides.push({
          name: `اسلاید ${banner.slides.length + 1}`,
          file : URL.createObjectURL(e.target.files[0])
        })
      }
      // data[indexOf] = banner;
      // setData(data)
    }else {
      let alreadyExist = _.find(banner.slides, (slide) => {
        return slide.path === e.target.files[0];
      })
      if (!alreadyExist) {
        banner.slides.push({
          name: `اسلاید ${banner.slides.length + 1}`,
          file : URL.createObjectURL(e.target.files[0])
        })
      }

      // data.push(banner)
      // setData(data)
    }


  }



  return (
    <Row style={{marginBottom: '20px'}}>
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
          <SwiperSlide key={index}>
            {props.name}
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <PlusBox file={true} onPickupFile={addSlide}  title={"افزودن اسلاید"}/>
        </SwiperSlide>
      </Swiper>
    </Row>

  )
}