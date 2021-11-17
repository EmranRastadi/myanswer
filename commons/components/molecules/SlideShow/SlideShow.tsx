import {SlideImg, SlideTitle} from "@utils/style";
import {ThemeProvider} from "styled-components";

interface Props {
  img: any,
  name: string
}

export default function SlideShow(props: Props) {

  const theme = {
    background: props.img
  }
  return (
    <ThemeProvider theme={theme}>
      <SlideImg>
        {/*<Image src={props.img} width={'100%'} height={'100%'}  />*/}
        <SlideTitle>
          {props.name}
        </SlideTitle>
      </SlideImg>
    </ThemeProvider>

  )
}