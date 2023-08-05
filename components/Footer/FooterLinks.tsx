import React from 'react';
import Link from 'next/link';

interface FooterItem {
  title: string;
  src: string;
}

interface FooterRowProps {
  items: FooterItem[];
}

const FooterPages: React.FC<FooterRowProps> = ({ items }) => {
  return (
    <div className="flex flex-row items-center text-center justify-around gap-4 text-xs mt-2">
      {items.map((item) => (
        <Link key={item.title} href={item.src} className=" hover:underline">
          {item.title}
        </Link>
      ))}
      <span>All Rights Reserved</span>
    </div>
  );
};

export default FooterPages;
