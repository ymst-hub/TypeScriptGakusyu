import type {ApiContext,User} from 'types'
import {fetcher} from 'utils'

export type GetUserParams = {
    /**
     * ユーザーID
     */
    id: number
}

/**
 * ユーザー認証API(個別)
 */
const getUser = async (
    context: ApiContext,
    {id}:GetUserParams,
):Promise<User> => {
    /**
     * ユーザーID
     * サンプルレスポンス
     */
    {
        "id": "1",
        "username":"you",
        "displayName":""
    }
}