import React,{useState,useCallback,useDebugValue} from "react";
//input向けにコールバックと現在の入力内容をまとめたHook
const useInput = () =>{
    //現在の状況
    const [state,setState] = useState('')
    //inputが変更されたらHook内の状態を更新する
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    },[])
    //デバック用ログ
    useDebugValue(`Input: ${state}`)

    return [state,onChange] as const
}
export const Input = () => {
    const [text,onChangeText] = useInput()
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText} />
            <p>Input: {text}</p>
        </div>
    )
}