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

export const SortSelector = ({ selections, queries, handleChange }) => (
    <Selector value={queries} onChange={handleChange}>
        {selections.map((select, index) => (
            <option key={index} value={select.value}>
                {select.name}
            </option>
        ))}
    </Selector>
);

SortSelector.defaultProps = {
    selections: [
        {
            name: 'SortBy',
            value: ''
        },
        {
            name: 'Ascending',
            value: 'Asc'
        },
        {
            name: 'Descending',
            value: 'Desc'
        }
    ]
};
export default SortSelector;
