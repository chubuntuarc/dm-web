"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Biografía', href: '/biografia' },
    { label: 'Trayectoria', href: '/trayectoria' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Asociaciones', href: '/asociaciones' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png" // Make sure to add your logo to the public folder
            alt="Dra. Mileidy Fernandez Ribot"
            width={320}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
          <button aria-label="Search" className={styles.searchButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.searchIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={styles.menuIcon}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}
        >
          <nav className={styles.mobileNavInner}>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 