/*
 * @Author: chentao 
 * @Date: 2020-12-29 15:50:14 
 * @Last Modified by: chentao
 * @Last Modified time: 2020-12-29 16:23:33
 */

import React,{useContext}from 'react'
import context from '../createContext'
function Message(){
    const {MessageContext,ContainerContext }=context;
    const messageObject =useContext(MessageContext)
    const containerObject=useContext(ContainerContext)
    console.log('接收到messageObject',messageObject)
    console.log('接收到的消息组件里面接收到父组件的contextProvider',containerObject)
    return (
        <div>
            <div>Message</div>
        </div>
    )
}
export default Message;