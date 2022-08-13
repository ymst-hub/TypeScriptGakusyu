import React,{memo,useState} from "react";

//FizzBuzzのコンソールを見ると良い
//2重になっているのはReact.StrictModeで囲われているから

//Fizzは普通、Buzzはmemo化コンポーネントを使う
type FizzProps = {
    isFizz:boolean
}
//isFizzの状態に関わらず親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) =>{
    const { isFizz } = props
    console.log(`Fizzを再描画 isFizz = ${isFizz}`)
    return <span>{isFizz ? 'Fizz':''}</span>
}

type BuzzProps = {
    isBuzz: boolean
}
//Buzzはメモ化した関数コンポーネント
const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props
    console.log(`Buzzを再描画 isBuzz = ${isBuzz}`)
    return (
        <span>
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})

//import {Parent2} from　~~~で読み込む
export const Parent2 = () => {
    const [count,setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0
    console.log(`Parentを再描画 count = ${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
            <p>{`FizzBuzzCount: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}