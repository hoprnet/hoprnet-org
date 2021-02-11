import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ItemsMenu() {
  const router = useRouter();
  const linkLocal = [
    {
      path: '/about-us',
      name: 'About us',
    },
    {
      path: '/technology',
      name: 'Technology',
    },
    {
      path: '/book-of-hopr',
      name: 'Book of HOPR',
    },
    {
      path: '/token',
      name: 'Token',
    },
    {
      path: '/win',
      name: 'Win',
    },
    {
      path: 'http://saentis.hoprnet.org/',
      name: 'Testnet',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
  ];

  return (
    <>
      <div className="menu-desktop">
        {linkLocal.map((e, index) => {
          const { path, name } = e;
          return (
            <Link key={index} href={path}>
              <a className={router.pathname === path ? 'active' : ''}>
                {name}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
