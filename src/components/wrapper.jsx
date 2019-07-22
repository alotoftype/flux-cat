import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
    width: 100%;
    font-family: 'Cardo';

    @media screen and (min-width: 768px) {
        max-width: 128em;
        width: 100%;
        section {
            margin: 0 1.6em;
            width: calc(50% -1.6em);
        }
    }
`;

export const Wrapper = ({ children }) => <Container>{children}</Container>;
export default Wrapper;
