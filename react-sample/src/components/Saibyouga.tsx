import React, { useCallback, useState } from "react";
type ButtonProps = {
    onClick: () => void
}
//DecrementButtonは通常
const DecrementButton = (props:ButtonProps) => {
    const {onClick} = props
    console.log('DecrementButton再描画')
    return <button onClick={onClick}>Decrement</button>
}

//IncrementButtonはメモ化する
const IncrementButton = React.memo((props:ButtonProps) => {
    const {onClick} = props
    console.log('IncrementButton 再描画')
    return <button onClick={onClick}>Increment</button>
})
//Doubleはメモ化する
const DoubleButton = React.memo((props:ButtonProps) => {
    const {onClick} = props
    console.log('Double 再描画')
    return <button onClick={onClick}>Double</button>
})
export const Parent3 = () => {
    const [count,setCount] = useState(0)
    const decrement = () =>{
        setCount((c) => c - 1)
    }
    const increment = () =>{
        setCount((c) => c + 1)
    }
    //useCallbackを使用する
    const double = useCallback(() => {
        setCount((c) => c * 2)
    },[])//第二引数が空のため、useCallbackは常に同じものを返す

    return (
        <div>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement} />
            <IncrementButton onClick={increment} />
            <DoubleButton onClick={double} />
        </div>
    )
}