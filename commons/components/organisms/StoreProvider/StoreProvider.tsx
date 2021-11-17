import {useContext, useState, useEffect, createContext, useReducer} from "react";
import {v4 as uuidv4} from 'uuid';
import types from "@utils/types";
import Cookies from "js-cookie";

interface Banners {
  title: string,
  id: string
}

interface InitialStateS {
  banners: Banners[] | any

}

type Action = {
  type: string,
  payload: any
}

export const Store = createContext<any>('')

let cookieData = Cookies.get('initialState') as any;

let initialsBanner = cookieData ? JSON.parse(cookieData) : []

const initialState = {
  banners: initialsBanner
};

function reducer(state: InitialStateS = initialState, action: Action) {
  switch (action.type) {
    case types.ADD_BANNER :
      return {...state, banners: action.payload}
    default :
      return state;
  }
}

export default function StoreProvider(props: any) {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <Store.Provider value={{state, dispatch}}>
      {props.children}
    </Store.Provider>
  )
}