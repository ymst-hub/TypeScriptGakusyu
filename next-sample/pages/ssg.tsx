import {NextPage,GetStaticProps,NextPageContext} from 'next'
//Nextjsの組み込みのコンポーネント
import Head from 'next/head'

//ページコンポーネントのprops定義
type SSGProps = {
    message:string
}

//SSG向けページ
const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props
    return (
        <div>
            {/**Headコンポーネントで包むと<head>タグに配置される */}
            <Head>
                <title >Static Site Generation(SSG)</title>
                <link rel="icon" href='favicon.ico' />
            </Head>
            <main>
                <p>
                    SSGによってビルド時に生成されたページです
                </p>
                <p>
                    {message}
                </p>
            </main>
        </div>
    )
}
//getStaticPropsはビルド時に実行される
//GetStaticPropsはSSGPropsを引数にとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async(context) => {
    const timestamp = new Date().toLocaleDateString()
    const message = `${timestamp}にgetStaticPropsが実行されました`
    console.log(message)
    return {
        props:{
            message,
        }
    }
}

export default SSG