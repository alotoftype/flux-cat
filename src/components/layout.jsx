import React from 'react';
import Wrapper from './wrapper';
import Title from './title';
import Navigation from './navigation';

export default function layout({ pageTitle, children, links }) {
    return (
        <>
        <Navigation links={links}/>
            <Wrapper>
                <Title text={pageTitle} />
                {children}
            </Wrapper>
        </>
    );
}
