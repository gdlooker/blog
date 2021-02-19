/*
 * @Author: chentao 
 * @Date: 2020-12-29 15:56:06 
 * @Last Modified by: chentao
 * @Last Modified time: 2020-12-29 16:20:24
 */
import React from 'react'
const initValue = {
}
const navInitValue={
}
const ContainerContext = React.createContext(initValue)
const NavBarContext =React.createContext(navInitValue)
const MessageContext=React.createContext({})
export default{
     NavBarContext,
     ContainerContext,
     MessageContext,
}
