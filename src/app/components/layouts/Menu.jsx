'use client';

import React from 'react';
import Link from 'next/link';
import { MdLocalMovies } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const navLinks = [
    { name: 'Películas', path: '/peliculas', icon: <MdLocalMovies className="navIcon" /> },
  ];



  const pathname = usePathname();

  return (
    <div className="desktopNavLinks">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`navLink ${pathname === link.path ? 'activeLink' : 'inactiveLink'}`}
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;