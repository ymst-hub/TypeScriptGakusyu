import React from "react";
//テキストボックスを返す
const Name = () =>{
    //input要素のonchangeイベントに対するコールバック関数を定義する
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return (
        //styleオブジェクトはキャメルケースになる
        <div style = {{padding:'16px',backgroundColor:'grey'}}>
            {/*forの代わりにhtmlForを利用する */}
            <label htmlFor="name">名前</label>
            {/*class、onchangeの代わりに className、onChangeを利用する */}
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}

export default Name