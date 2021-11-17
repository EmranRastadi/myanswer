import {SlideImg, SlideTitle, ClearImg} from "@utils/style";
import {ThemeProvider} from "styled-components";
import Image from "next/image";
import Delete from '@utils/icons/delete.png'
import {useContext} from "react";
import _ from 'lodash'
import {Store} from "@organisms/StoreProvider/StoreProvider";
import {Slide} from "@organisms/SwiperSlider/SwiperSlider";
import types from "@utils/types";
import Cookies from "js-cookie";

interface Props {
  file: any,
  name: string,
  id: string,
  bannerId: string
}

export default function SlideShow(props: Props) {

  const {state, dispatch} = useContext(Store);

  const theme = {
    background: props.file
  }

  const deleteSlide = (id: string) => {
    let banners = state.banners;
    let banner = _.find(banners, (i: any) => {
      return i.id === props.bannerId;
    })
    let indexOfBanner = banners.indexOf(banner)
    let slides = _.find(banner.slides, (i: Slide) => {
      return i.id === id;
    })
    let indexOfSlide = banner.slides.indexOf(slides);
    banner.slides.splice(indexOfSlide, 1);

    banners[indexOfBanner] = banner;
    dispatch({
      type : types.ADD_BANNER,
      payload : banners
    })

    Cookies.set("initialState", JSON.stringify(banners))


  }


  return (
    <ThemeProvider theme={theme}>
      <SlideImg>
        <ClearImg id={"hover"}>
          <Image onClick={() => deleteSlide(props.id)} src={Delete} width={'20px'} height={'20px'}/>
        </ClearImg>
        {/*<Image src={props.img} width={'150px'} height={'100%'}  />*/}
        <SlideTitle>
          {props.name}
        </SlideTitle>
      </SlideImg>
    </ThemeProvider>

  )
}