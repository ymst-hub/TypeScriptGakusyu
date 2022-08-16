import styled from 'styled-components';
import Styled,{ css } from 'styled-components';

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
`
