"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const mobileNavRef = useRef(null);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Biografía', href: '/biografia' },
    { label: 'Trayectoria', href: '/trayectoria' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Asociaciones', href: '/asociaciones' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Blog', href: '/blog' },
  ];

  // Determine if we're on the home page
  const isHomePage = pathname === '/';

  // Handle scroll events to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      // Make header sticky after scrolling down 100px
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check in case page is loaded scrolled down
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && mobileNavRef.current && !mobileNavRef.current.contains(event.target) && 
          !event.target.closest(`.${styles.mobileMenuButton}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isHomePage ? styles.homeHeader : ''} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Dra. Mileidy Fernandez Ribot"
            width={isSticky ? 140 : 186}
            height={isSticky ? 30 : 40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}
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
          ref={mobileNavRef}
          className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''} ${isHomePage ? styles.homeMobileNav : ''}`}
        >
          <nav className={styles.mobileNavInner}>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
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