/*
 * @Author: chentao 
 * @Date: 2021-01-05 14:18:06 
 * @Last Modified by: chentao
 * @Last Modified time: 2021-01-05 14:25:37
 */
import React, { useEffect, useState } from 'react'
//自定义一个useState的hooks
function useCount(initValue: number) {
    const [count, setCount] = useState(initValue)
    return [
        count, () => {
            setCount(count + 1)
        }
    ]
}

export default (props: any) => {
    console.log('props', props)
    const [count1, addCount1]: any = useCount(0)
    const [count2, addCount2]: any = useCount(0)
    return (
        <div>
            <div>UseStateExample操作</div>
            <div>you are onclick {count1}次</div>
            <div>you are onclick {count2}次</div>
            <button
                onClick={() => {
                    addCount1()
                }}
                style={{
                    cursor: 'pointer',
                    padding: '3px'
                }}>addCount1操作</button>
            <button
                onClick={() => {
                    addCount2()
                }}
                style={{
                    cursor: 'pointer',
                    padding: '3px'
                }}>addCount2操作</button>
        </div>
    )
}