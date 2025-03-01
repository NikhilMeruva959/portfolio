// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Header: React.FC = () => {
  return (
    <header>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
        <Link to="/blog">
          <Button variant="link">Blog</Button>
        </Link>
        <Link to="/contact">
          <Button variant="link">Contact</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
