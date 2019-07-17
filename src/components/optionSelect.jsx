import React from 'react'
import styled from 'styled-components'

const Selector = styled.select`
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #4d4d4d;
    border-radius: 0;
    display: block;
    font-size: 2.4em;
    position: relative;
    min-width: 20em;
    min-height: 2em;
    line-height: 1.2;
    text-align-last: center;
    margin: 1.6em auto;
    option {
        background-color: transparent;
        text-align: center;
        position: absolute;
        -webkit-appearance: none;
        moz-appearance: none;
        appearance: none;
    }
`

export const OptionSelector = ({ animals, selections }) => (
    <Selector>
        {console.log(animals)}
        {animals
            ? animals.map((select, index) => (
                  <option key={select.id} value={select.name}>
                      {select.name}
                  </option>
              ))
            : selections.map((select, index) => (
                  <option key={index} value={select.value}>
                      {select.name}
                  </option>
              ))}
    </Selector>
)

OptionSelector.defaultProps = {
    selections: [
        {
            name: 'Choose a Breed',
            value: ''
        },
        {
            name: 'breed 1',
            value: 'breed1'
        },
        {
            name: 'breed 2',
            value: 'breed2'
        },
        {
            name: 'breed 3',
            value: 'breed3'
        }
    ]
}
export default OptionSelector
