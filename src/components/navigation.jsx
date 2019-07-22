import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    align-items: center;
    justify-content: center;
    background: var(--background);
    display: flex;
    height: 10em;

    .link {
        color: var(--grey);
        display: block;
        text-decoration: none;
        font-variant: small-caps;
        font-size: 2em;
        height: 50%;
        width: 5em;
    }
`;

const Navigation = ({ links }) => (
    <Nav>
        {links.map(link => (
            <Link key={link.id} className="link" to={link.url}>
                {link.name}
            </Link>
        ))}
    </Nav>
);

export default Navigation;
