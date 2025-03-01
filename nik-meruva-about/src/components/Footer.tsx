// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-500 mt-8">
      <p className="mb-2">
        <a href="/rss" target="_blank" rel="noopener noreferrer" className="mr-4">
          ↗ rss
        </a>
        <a href="https://github.com/NikhilMeruva959" target="_blank" rel="noopener noreferrer" className="mr-4">
          ↗ github
        </a>
        <a href="https://github.com/NikhilMeruva959/portfolio" target="_blank" rel="noopener noreferrer" className="mr-4">
          ↗ view source
        </a>
      </p>
    </footer>
  );
};

export default Footer;
