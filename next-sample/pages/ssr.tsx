import { GetServerSideProps,NextPage } from "next";
import Head from "next/head";

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このページはサーバーサイドレンダリングによってアクセス時にサーバーで作成されたページです
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

//getServerSidePropsはリクエストのたびに実行される
export const getServerSideProps: GetServerSideProps<SSRProps> = async(
    context//リクエストの状況なども追加で見れる
    //req リクエストの情報やCookie
    //res Cokkieのセット、レスポンスヘッダーの書き換え
    //resolvedUrl 実際にアクセスがあったパス
    //query クエリをオブジェクトにしたもの
) => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} このページのgetServerSidePropsが実行されました`
    console.log(message)
    return {
        props:{
            message,
        }
    }
}
export default SSR