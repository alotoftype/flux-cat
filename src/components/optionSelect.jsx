import React from 'react';
import styled from 'styled-components';

const Selector = styled.select`
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--black);
    border-radius: 0;
    display: block;
    font-size: 1.6em;
    position: relative;
    min-width: 0.2em;
    min-height: 2em;
    line-height: 1.2;
    text-align-last: center;
    margin: 1.6em auto;
    option {
        background-color: transparent;
        text-align: center;
    }
`;

export const OptionSelector = ({
    animals,
    selections,
    queries,
    handleChange
}) => (
    <Selector value={queries} onChange={handleChange}>
        {animals
            ? animals.map((select, index) => (
                  <option key={select.id} value={select.id}>
                      {select.name}
                  </option>
              ))
            : selections.map((select, index) => (
                  <option key={index} value={select.value}>
                      {select.name}
                  </option>
              ))}
    </Selector>
);

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
};
export default OptionSelector;
