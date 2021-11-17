import React from "react";
import {SliderAddBox} from "@utils/style";
import {PlusIcon} from "@atoms/index";

interface Props {
  title: string,
  onClick?: Function,
  onPickupFile?: (e: any) => void,
  hasIcon?: string,
  file?: boolean
}

export default function PlusBox(props: Props) {
  return (
    <SliderAddBox className={props.hasIcon === "none" ? "active" : ""}
                  onClick={() => props.onClick ? props.onClick() : null}>
      {props.hasIcon === "none" ? '' : <PlusIcon/>}
      <h5>{props.title}</h5>
      {props.file ? <input className={"input-files"} onChange={e => props.onPickupFile ? props.onPickupFile(e) : null}
                           type={"file"}/> : ''}
    </SliderAddBox>
  )
}