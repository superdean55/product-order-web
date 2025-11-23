import React from 'react';

interface LabeledDataItemProps {
  label: string;
  value: React.ReactNode; 
  className?: string;
}

export const LabeledDataItem: React.FC<LabeledDataItemProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`w-full flex flex-col items-start p-2 bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}>
      <span className="
        text-[10px] font-medium uppercase tracking-wider 
        text-gray-500 dark:text-gray-400
      ">
        {label}
      </span>
      <span className="
        text-lg font-semibold 
        text-gray-700 dark:text-gray-100
      ">
        {value}
      </span>
      
    </div>
  );
};