import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-column-gap: 2em;
        max-width: 128em;
        width: 100%;
        section:first-of-type {
          order: 2;
        }
    }

    img {
        width: 100%;
    }
`

export const Wrapper = ({ children }) => <Container>{children}</Container>

export default Wrapper
