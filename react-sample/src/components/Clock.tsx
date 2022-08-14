import React,{useState,useEffect} from "react";
//タイマーの周期
const UPDATE_CYCLE = 1000//１秒
const KEY_LOCALE = 'KEY_LOCALE'//ローカル用のキー
enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}
const getLocaleFromString = (text:string) => {
    switch(text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}
export const Clock = () => {
    const [timestamp,setTimestamp] = useState(new Date())
    const [locale,setLocale] = useState(Locale.US)

    //タイマーのセットの副作用
    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date())
        },UPDATE_CYCLE)
        //クリーンアップ関数(アンマウント時にタイマーの解除
        return () => {
            clearInterval(timer)
        }
    },[])//初期表示のみ

    //localstorageから値を読み込むための副作用
    useEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if(savedLocale !== null){
            setLocale(getLocaleFromString(savedLocale))
        }
    },[])

    //localeが変化した際に値を保存するための副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE,locale)
        //依存配列にlocaleを渡す→変化するたびに呼び出す
    },[locale])

    return (
        <div>
            <p>
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
                        <option value="en-US">en-US</option>
                        <option value="ja-JP">ja-JP</option>
                    </select>
            </p>
        </div>
    )
}