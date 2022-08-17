import styled from 'styled-components';
import Styled,{ css } from 'styled-components';
import React, { useState } from 'react';
import { type } from 'os';

const variants = {
    primary:{
        color: '#ffffff',
        backgroundColor: '#1D3461',
        border: 'none',
    },
    success: {
        color: '#ffffff',
        backgroundColor: 'transparent',
        border: '1px solid black',
    },
    transparent: {
        color: '#111111',
        backgroundColor: 'transparent',
        border: '1px solid black',
    },
}as const

type StyledButtonProps = {
    variant: keyof typeof variants
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ variant }) => {
        const style = variants[variant]
        //cssを使う
        return css`
            color:${style.color};
            background-color: ${style.backgroundColor};
            border: ${style.border}
        `;
    }}
    border-radius: 12px;
    font-size:14px;
    height:38px;
    line-height:22px;
    letter-spacing:0;
    cusor:pointer;
    &:focus {
        outline:none;
    }
`
export const StyledButton2 = styled.button<StyledButtonProps>`
    ${({ variant }) => {
        const style = variants[variant]
        //cssを使う
        return css`
            color:${style.color};
            background-color: ${style.backgroundColor};
            border: ${style.border}
        `;
    }}
    border-radius: 12px;
    font-size:14px;
    height:38px;
    line-height:22px;
    letter-spacing:0;
    cusor:pointer;
    &:focus {
        outline:none;
    }
`

type InputProps = JSX.IntrinsicElements['input'] & {
    label: string
}

export const Input = (props: InputProps) => {
    const {label,...rest} = props
    const [text,setText] = useState('')
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const resetInputField = () => {
        setText('')
    }
    return (
        <div>
            <label htmlFor={props.id}>{label}</label>
            <input {...rest} type="text" value={text} onChange={onInputChange} />
            <button onClick={resetInputField}>Reset</button>
        </div>
    )
}

