import { useState,useEffect } from "react";

function Sayhello(){
    //内部での情報をuseStateを使用
    const [data,setData] = useState({name: ''})
    //外部のAPIへのアクセスは副作用のためuseEffect内で処理
    useEffect(() => {
        //pages/api/hello.tsの内容をリクエスト
        fetch('api/hello')
            .then((res) => res.json())
            .then((profile) => {
                setData(profile)
            })
    },[])
    return <div>hello {data.name}</div>
}

export default Sayhello