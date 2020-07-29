import styled from 'styled-components'

export const RoundBut = styled.button`
    background: transparent;
    color: ${({theme}) => theme.primaryColor};
    outline: 0;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.primaryColor};
    padding: 12, 15;
`