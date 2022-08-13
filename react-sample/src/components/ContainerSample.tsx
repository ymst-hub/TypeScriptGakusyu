/**
 * Helloを赤背景で表示する
 */

//containerは赤背景のボックス内にタイトルと子要素を表示する
const Container = (props:{title:string; children: React.ReactElement}) => {
    const {title,children} = props//ここで埋め込む

    //propsにあるものは使用できる
    return (
        <div style={{background:'red'}}>
            <span>{title}</span>
            {/*propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する*/}
            <div>{children}</div>
        </div>
    )
}
const Parent = () => {
    return (
        //Containerを利用時に他要素を囲って使用する
        <Container title="Hello">
            <p>ここが背景色</p>
        </Container>
    )
}
export default Parent