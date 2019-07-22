import React from 'react';
import styled from 'styled-components';

const DisplayImage = styled.div`
    min-width: 2em;
    max-height: 20em;
    overflow: hidden;
    object-fit: fill;
    padding: 1.6em;
    width: 100%;

    @media screen and (min-width: 768px) {
        max-width: 25em;
        max-height: 15em;
    }
    img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }
`;

export const ImageCard = ({ animal }) => (
    <DisplayImage>
        <img src={animal.url} alt={animal.alt} />
    </DisplayImage>
);

export default ImageCard;
