import { useRouter } from "next/router";
import { useEffect } from "react";
const Page = () => {
    const router = useRouter() //useRouterの利用
    useEffect(() => {
        router.push('/posts/1')//パスのところに移動する
    })
    return <span>{router.pathname}</span>

}
export default Page