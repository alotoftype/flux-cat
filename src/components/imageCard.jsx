import React from 'react'
import styled from 'styled-components'

const DisplayImage = styled.div`
    min-width: 2em;
    overflow: hidden;
    img{
        width: 100%;
        height: auto;
    }
`

export const ImageCard = ({ animal }) => (
    <DisplayImage>
        <img src={animal.url} alt={animal.alt} />
    </DisplayImage>
)

export default ImageCard;
