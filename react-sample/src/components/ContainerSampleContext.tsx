import React from "react";
/**
 * h1タグのReactBookが表示される
 */
//Contextを作成
const TitleContext = React.createContext('')
//titleのContextの値を参照する
const Title = () => {
    //Consumerを使って参照する
    return (
        <TitleContext.Consumer>
            {/* Consumer直下に関数をおいて、Contextの値を参照する */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/*headerからtitleへデータは渡さない*/}
            <Title />
        </div>
    )
}

//Pageコンポーネントの中でContextへ値を渡す
const Page = () =>{
    const title = 'React Book'
    //Providerを利用
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}
export default Page