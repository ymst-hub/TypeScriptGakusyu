import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
    //サーバーサイドで描画→test1、クライアントサイド→test2
    console.log('process.env.TEST' , process.env.TEST)
    console.log('process.env.NEXT_PUBLIC_TEST' , process.env.NEXT_PUBLIC_TEST)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel = "icon" href="/favicon.ico" />
            </Head>
            <main>
                {/**サーバーサイドではtest1、クライアントで再描画すると何も表示されない 
                 * サーバー側とクライアント側でhtmlが異なるためエラーが起こる
                */}
                <p>{process.env.TEST} </p>
                <p>{process.env.NEXT_PUBLIC_TEST}</p>
            </main>
        </div>
    )
}
//getStaticPropsは常にサーバーサイドで実行されるため全て見れる
export const getStaticProps: GetStaticProps = async(context) => {
    console.log('process.env.TEST' , process.env.TEST)
    console.log('process.env.NEXT_PUBLIC_TEST' , process.env.NEXT_PUBLIC_TEST)
    return {
        props: {},
    }
}

export default EnvSample