import React from 'react'
import styled from 'styled-components'

const MainContent = styled.div`
    color: red;
    font-size: 36px;
`
const MainTitle = styled.h1`
    color: blue;

`
const Main = () => {
    return (
        <MainContent>Main
            <MainTitle>
                Title1
            </MainTitle>
            <MainTitle>
                Title2
            </MainTitle>
            <MainTitle>
                Title3
            </MainTitle>
        </MainContent>
    )
}

export default Main