import {RoundedIcon} from "@utils/style";
import Image from "next/image";
import Plus from '@utils/icons/plus.png'
export default function PlusIcon(){
  return (
    <RoundedIcon>
      <Image src={Plus} width={'20px'} height={'20px'} />
    </RoundedIcon>
  )
}