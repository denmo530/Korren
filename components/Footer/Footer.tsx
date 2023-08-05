import React from 'react';
import FooterPages from './FooterPages';
import FooterLinks from './FooterLinks';

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
    <footer className="bg-slate-100 mt-8 py-8 flex items-center flex-col ">
      <h2 className="text-lg font-semibold  mb-4 ">Korren</h2>
      <FooterPages items={footerItems.pages} />
      <FooterLinks items={footerItems.links} />
      <div className="mt-5 text-xs">
        <p>Developed by Dennis Moradkhani& Tim Olsson</p>
      </div>
    </footer>
  );
};

export default Footer;
