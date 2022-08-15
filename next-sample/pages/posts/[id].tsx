//型を利用するためインポート
import { GetStaticPaths,GetStaticProps,NextPage } from "next";
import { NextParsedUrlQuery } from "next/dist/server/request-meta";
import Head from "next/head";
import { useRouter } from "next/router";//userRouterというHook

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const {id} = props
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading</div>
    }
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    idごとに異なります
                </p>
                <p>
                    {`/posts/${id}に対応するページです`}
                </p>
            </main>
        </div>
    )
}
//getStaticPathは生成したいページのパスパラメータの組み合わせを返す
//[id].tsxのため、idが必要

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
    {
        params:{
            id:'1',
        },
    },
    {
        params:{
            id:'2',
        },
    },
    {
        params:{
            id:'3',
        },
    },]
    //fallbackをfalseにするとpathsで定義されたもの以外は404になる
    return {paths,fallback: false}
}

//型を作成する
interface PostParams extends NextParsedUrlQuery {
    id:string
}

//getStaticPaths実行後にそれぞれのパスに対してgetStaticPropsが実行される
export const getStaticProps: GetStaticProps<PostProps,PostParams> = async(context) => {
    return {
        props: {
            id:context.params!['id'],
        },
    }
}

export default Post