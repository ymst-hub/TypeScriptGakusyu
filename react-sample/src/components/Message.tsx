//無名関数でコンポーネントを作成して、Textに代入する
//Textは親から'content'を受け取る
const Text = (props: {content: string}) =>{
    //propsからcontentを取り出す
    const {content} = props
    return <p className="text">{content}</p>
}
//コンポーネントをMessageに代入する
const Message = (props:{}) =>{
    const content1 = 'This is parent component'
    const content2 = 'Message uses Text component'

    return (
        <div>
            {/* contentのキーで値を渡す */}
            <Text content={content1}/>
            {/* 異なるデータを渡す */}
            <Text content={content2}/>
        </div>
    )
}

export default Message