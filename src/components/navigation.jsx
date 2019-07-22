import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ links }) => (
    <nav>
    <ol>
      {links.map(link => (
        <NavLink to={link.url}>{link.url}</NavLink>
      ))}
    </ol>
    </nav>
);
