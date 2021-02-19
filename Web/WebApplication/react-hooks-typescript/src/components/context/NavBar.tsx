import React, { useContext, useReducer, useEffect } from 'react'
import context from '../createContext'

const initialState = { count: 0 };


function init(initialCount: number) {
    return { count: initialCount };
}

function reducer(state: any, action: any) {
    console.log('initReducer', state)
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function NavBar() {
    const { ContainerContext } = context
    //在最外面的组件中创建createContext，在子组件里面直接通过useContext来获取
    const contextObject = useContext(ContainerContext)
    console.log('子组件接收到值', contextObject)
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state', state)
    return (
        <div>
            <div>我是navbar组件</div>
            <div style={{
                cursor: 'pointer',
                padding: '10px'
            }} onClick={() => {
                dispatch({
                    type: 'increment', payload: {
                        initialCount: state['count']
                    }
                })
            }}>点击</div>
            <div>响应值:{state['count']}</div>
        </div>
    )
}
export default NavBar