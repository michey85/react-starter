import cn from 'clsx';

import style from './Title.module.css';

type TitleProps = {
  level?: number;
  className?: string;
  children: React.ReactNode;
};

const Title = ({ level = 1, className = '', children }: TitleProps) => {
  const Tag = `h${level}` as React.ElementType;

  return <Tag className={cn(style.title, className)}>{children}</Tag>;
};

export { Title };
