import React from 'react';

interface FooterItem {
  title: string;
  src: string;
}

interface FooterRowProps {
  items: FooterItem[];
}

const FooterRow: React.FC<FooterRowProps> = ({ items }) => {
  return (
    <div className="flex flex-row justify-center gap-6 mb-3">
      {items.map((item) => (
        <a key={item.title} href={item.src} className="text-md gap-4 hover:underline">
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default FooterRow;
