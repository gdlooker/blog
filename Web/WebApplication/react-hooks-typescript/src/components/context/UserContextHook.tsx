import React, { useCallback, useRef, RefObject, useMemo } from 'react';
import NavBar from './NavBar'
import Message from './Message'
import context from '../createContext'
console.log('context', context)
const { ContainerContext, NavBarContext, MessageContext } = context
function UserContextHook() {
    return (
        <ContainerContext.Provider value={{
            firstName: '王',
            lastName: '麻子',
            message: 'message'
        }}>
            <div>
                <NavBarContext.Provider
                    value={{
                        navBarTitle: 'navBarTitle_2'
                    }}
                >
                    <NavBar />
                </NavBarContext.Provider>
                <MessageContext.Provider value={{
                    message: 'message'
                }}>
                    <Message />
                </MessageContext.Provider>

            </div>
        </ContainerContext.Provider>
    )
}
export default UserContextHook