import cn from 'clsx';

import style from './Title.module.css';

const Title = ({ level = 1, className = '', children }) => {
  const Tag = `h${level}`;

  return <Tag className={cn(style.title, className)}>{children}</Tag>;
};

export { Title };
