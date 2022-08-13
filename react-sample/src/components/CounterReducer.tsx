import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";
//reducerが受け取るaction型を定義
type Action = 'DECREMENT'|'INCREMENT'|'DOUBLE'|'RESET'
const reducer = (currentCount:number,action: Action) => {
    switch(action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}
type CounterProps = {
    initialValue : number
}

const CounterReducer = (props: CounterProps) => {
    const { initialValue } = props
    const [count,dispatch] = useReducer(reducer,initialValue)
    return (
        <div>
            <div style={{background:'green'}}>
                <h1>useReducer</h1>
                <p>Count: {count}</p>
                {/** dispatch関数にactionを渡して状態を更新する */}
                <button onClick={() => dispatch('DECREMENT')}>-</button>
                <button onClick={() => dispatch('INCREMENT')}>+</button>
                <button onClick={() => dispatch('DOUBLE')}>*2</button>
                <button onClick={() => dispatch('RESET')}>Reset</button>
            </div>
        </div>
    )
}
export default CounterReducer