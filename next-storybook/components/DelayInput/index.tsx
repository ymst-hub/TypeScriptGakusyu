import { types } from "@storybook/addons";
import { time } from "console";
import React,{useState,useCallback,useRef} from "react";

type DelayButtonProps = {
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const DelayInput = (props:DelayButtonProps) => {
    const {onChange} = props
    //入力中かどうかを保持する状態
    const [isTyping,setIsTyping] = useState(false)
    //inputに表示するテキストを保持する状態
    const [inputValue,setInputValue] = useState('')
    //spanに表示するテキストを保持する状態
    const [viewValue,setViewValue] = useState('')
    //タイマーを保持するRef
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        //入力中のフラグをセット
        setIsTyping(true)
        //inputに表示するテキストを更新する
        setInputValue(e.target.value)

        //timeRefに設定してあるタイマーがある場合解除
        if(timerRef.current !== null){
            clearTimeout(timerRef.current)
        }
        //１秒ごとに実行するタイマーをセット
        timerRef.current = setTimeout(() => {
            timerRef.current = null
            //入力中のフラグを解除する
            setIsTyping(false)
            //spanに表示するテキストを更新する
            setViewValue(e.target.value)
            //onChangeを呼ぶ
            onChange(e)
        },1000)
    },[onChange])

    //spanに表示するテキスト
    const text = isTyping ? '入力中...' : `入力したテキスト:${viewValue}`
    return (
        <div>
            {/** data-testIdはテスト中のみ使用 */}
            <input data-testid="input-text" value={inputValue} onChange={handleChange} />
            <span data-testid="display-text">{text}</span>
        </div>
    )
}

