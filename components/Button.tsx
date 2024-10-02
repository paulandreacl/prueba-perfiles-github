import Link from 'next/link';
import React, { FC } from 'react';

interface ButtonProps {
  href: string;
  text: string;
  iconClassName?: string;
}

const Button: FC<ButtonProps> = ({ href, text, iconClassName }) => {
  return (
    <div className='bg-purple-500 p-2 rounded-lg'>
      <Link
        href={href}
        className='text-white hover:underline text-center flex items-center'
      >
        {iconClassName && (
          <i className={`${iconClassName} mr-2`} aria-hidden='true'></i>
        )}
        {text}
      </Link>
    </div>
  );
};

export { Button };
