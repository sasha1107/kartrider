import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <StyledFooter>
            Data based on <strong>NEXON DEVELOPERS</strong>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    padding: 20px;
    font-size: 12px;
    background-color: #fff;
    border-top: 1px solid #eee;
    strong {
        font-weight: 400;
    }
`
