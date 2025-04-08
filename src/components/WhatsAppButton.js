import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = ({ phoneNumber = '5216642866427' }) => { // Replace with your actual number including country code, e.g., '1234567890'
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=%C2%A1Hola%2C+buen+d%C3%ADa%21&type=phone_number&app_absent=0`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton} aria-label="Contact us on WhatsApp">
        <FaWhatsapp size={30} />
    </Link>
  );
};

export default WhatsAppButton;
