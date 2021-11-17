import {useContext, useState, useEffect} from "react";
import {ContextApi} from "@utils/Context";

export default function ContextComponent(props: any) {
  const [data, setData] = useState([]);
  return (
    <ContextApi.Provider value={{data, setData}}>
      {props.children}
    </ContextApi.Provider>
  )
}