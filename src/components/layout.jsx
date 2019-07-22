import React from 'react';
import Wrapper from './wrapper';
import Title from './title';

export default function layout({ pageTitle, children }) {
    return (
        <>
            <Wrapper>
                <Title text={pageTitle} />
                {children}
            </Wrapper>
        </>
    );
}
