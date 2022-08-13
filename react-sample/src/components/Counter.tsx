import { useState } from "react";
type CounterProps = {
    initialValue: number
}
const Counter = (props: CounterProps) => {
    const { initialValue } = props
    //カウントを保持する状態をuseStateを使う
    const [count,setCount] = useState(initialValue)

    return (
        <div>
            <div style={{background:'yellow'}}>
                <h1>useState</h1>
                <p>Count:{count}</p>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
            </div>
        </div>

    )
}
export default Counter