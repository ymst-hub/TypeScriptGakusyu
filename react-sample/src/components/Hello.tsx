//クリックするとアラートを出すテキストを返す
const Hello = () =>{
    //クリックがトリガー
    const onClick = () => {
        //アラートを出す
        alert('hello')
    }
    const text = 'Hello React'
    //テキストを子にもつdiv要素を返す
    return(
        <div onClick={onClick}>
            {text}    
        </div>
    )

}
//外部から読み込みできるようにexportする
export default Hello
//src/index.tsxを修正する