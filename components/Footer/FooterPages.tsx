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
    <div className="flex flex-col text-center md:flex-row gap-2 md:gap-4">
      {items.map((item) => (
        <Link key={item.title} href={item.src} className="text-sm md:text-md hover:underline m-1">
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default FooterPages;
