import React from "react";
import {SliderAddBox , Disabled} from "@utils/style";
import {PlusIcon} from "@atoms/index";

interface Props {
  title: string,
  onClick?: Function,
  onPickupFile?: (e: any) => void,
  hasIcon?: string,
  file?: boolean,
  disabled?:boolean
}

export default function PlusBox(props: Props) {
  return (
    <SliderAddBox className={props.hasIcon === "none" ? "active" : ""}
                  onClick={() => props.onClick ? props.onClick() : null}>
      {props.disabled ? <Disabled /> : ''}
      {props.hasIcon === "none" ? '' : <PlusIcon/>}
      <h5>{props.title}</h5>
      {props.file && !props.disabled ? <input className={"input-files"} onChange={e => props.onPickupFile ? props.onPickupFile(e) : null}
                           type={"file"}/> : ''}
    </SliderAddBox>
  )
}