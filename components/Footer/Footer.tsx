import React from 'react';
import styles from '@/styles/Footer.module.css';
import FooterRow from './FooterRow';

const footerItems = {
  pages: [
    {
      title: 'Blog',
      src: '/about'
    },
    {
      title: 'About Us',
      src: '/about'
    },
    {
      title: 'Contact',
      src: '/about'
    },
    {
      title: 'All Dorms',
      src: '/about'
    }
  ],
  links: [
    {
      title: 'Terms & Conditions',
      src: ''
    },
    {
      title: 'Privacy Policy',
      src: ''
    }
  ]
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className="text-2xl font-semibold mb-4">Korren</h2>
      <FooterRow items={footerItems.pages} />
      <div className="flex flex-row justify-center gap-6">
        <FooterRow items={footerItems.links} />
        <span>All Rights Reserved</span>
      </div>
      <div className="mt-5 text-sm">
        <p>
          Developed by <span>Dennis Moradkhani</span> & <span>Tim Olsson</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
