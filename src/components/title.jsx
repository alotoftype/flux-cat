import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    text-align: center;
`;

const title = ({ text }) => {
    return <Header>{text}</Header>;
};

export default title;
