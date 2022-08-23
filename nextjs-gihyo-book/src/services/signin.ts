import {ApiContext,User} from 'types'
import {fetcher} from 'utils'

export type SigninParams = {
    /**
     * ユーザー名
     * サンプルユーザーはuser
     */
    username: string
    /**
     * パス
     * サンプルユーザーはpassword
     */
    password: string
}
/**
 * 認証API（サインイン）
 * @param context APIコンテクスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async(
    context: ApiContext,
    params:SigninParams,
):Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g,'')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        }
    )
}

export default signin