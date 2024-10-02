import React from 'react';

interface InfoItemProps {
  iconClassName: string;
  label: string;
  content: string | number | JSX.Element;
}

const InfoItem = ({ iconClassName, label, content }: InfoItemProps) => {
  return (
    <div className='flex items-center text-gray-700'>
      <i className={`${iconClassName} mr-2`} aria-hidden='true'></i>
      <strong>{label}:</strong>
      <span className='ml-2'>{content}</span>
    </div>
  );
};

export { InfoItem };
