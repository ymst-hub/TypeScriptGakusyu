import React, { useState,useMemo } from "react";

export const UseMemoSample = () => {
    //テキストボックスの中身を保存
    const [text,setText] = useState('')
    //文字列のリストを保存
    const [items,setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            return [...prevItems,text]
        })
        setText('')
    }
    //再描画のたびにitems.reduceを実行する
    const numberOfCharacters1 = items.reduce((sub,item) => sub + item.length,0)
    const numberOfCharacters2 = useMemo(() => {
        return items.reduce((sub,item) => sub + item.length,0)
    },[items])

    return(
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>ADD</button>
            </div>
            <div>
                {items.map((item,index) => (
                    <p key = {index}>{item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1:{numberOfCharacters1}</p>
                <p>Total Number of Characters 2:{numberOfCharacters2}</p>
            </div>
        </div>
    )
}