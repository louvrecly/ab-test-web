import React from 'react';
import './HeadNav.css';

interface IHeadNavProps {
  title: string
}

const HeadNav: React.FC<IHeadNavProps> = ({ title }: IHeadNavProps) => {
  return (
    <div className="head-nav">
      <button className="menu nav-button">三</button>
      <div className="switch">
        {title}
      </div>
      <button className="search nav-button">Q</button>
    </div>
  );
}

export default HeadNav;
