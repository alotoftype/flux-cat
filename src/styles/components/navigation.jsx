import React from 'react';
import { NavLink } from 'react-dom';

export default function navigation({ Links }) {
    return (
      <nav>
        <ol>
          Links.map(link => (<NavLink to={link.url}>{link.name}</NavLink> ))
        </ol>
      </nav>
    );
}
