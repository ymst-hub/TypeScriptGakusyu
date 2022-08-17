import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButtpn'
import React, { useState } from 'react'
import {action} from '@storybook/addon-actions'

export default {
    title:'StyledButton',
    component: StyledButton,
    argTypes:{onClick:{action:'clicked'}},
}as ComponentMeta<typeof StyledButton>

//incrementという名前でactionを出力するための関数を作成する
const incrementAction = action('increment')

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Primary
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}

export const Primary2 = (props) => {
    //actionの定義
    const [count,setCount] = useState(0)
    const onClick = (e:React.MouseEvent) => {
        //現在のカウントを渡してActionを呼ぶ
        incrementAction(e,count)
        setCount((c) => c + 1)
    }
    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Primary2 const {count}
        </StyledButton>
    )
}