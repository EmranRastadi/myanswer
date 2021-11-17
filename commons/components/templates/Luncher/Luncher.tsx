import {Col, Container, Row} from "react-bootstrap";
import {PlusBox} from "@molecules/index";
import {SwiperSlider} from "@organisms/index";
import {v4 as uuid} from "uuid";
import {useContext} from "react";
import {Store} from "@organisms/StoreProvider/StoreProvider";
import types from "@utils/types";
import Cookies from "js-cookie";
export default function Luncher() {
  const {state, dispatch} = useContext(Store);
  const addBanner = () => {
    const banners = state.banners;
    banners.push({
      name: `بنر ${state.banners.length + 1}`,
      id: uuid(),
      slides : []
    })
    dispatch({
      type : types.ADD_BANNER,
      payload : banners
    })
    Cookies.set("initialState" , JSON.stringify(banners));
    // localStorage.setItem("initialState" , JSON.stringify(banners));
  }
  return (
    <Container style={{overflow : 'hidden' , padding : '100px 20px'}}>
      <Row dir={"rtl"}>
        <Col lg={2} md={4} xs={12} sm={2} style={{padding : 0}}>
          <PlusBox title={"افزودن بنر"} onClick={addBanner}/>
        </Col>
      </Row>
      <br/>
      {state.banners.length ? state.banners.map((item: any, index: number) => (
        <>
          <SwiperSlider {...item} key={index}/>
          <br/>
        </>
      )) : ''}
    </Container>
  )
}