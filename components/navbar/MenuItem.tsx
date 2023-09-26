import React from 'react';

interface MenuItemProps {
  onClick: () => void;
  title: string;
  icon: JSX.Element;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, title, icon }) => {
  return (
    <div
      className="flex cursor-pointer items-center text-md gap-1 p-2 rounded-lg text-slate-600 hover:text-primary transition-all"
      onClick={onClick}>
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;
