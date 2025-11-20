import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...rest }: InputProps) {
  return (
    <div className="mb-4 text-left">
      <label className="block mb-1 font-medium text-gray-700 dark:text-gray-100" htmlFor={rest.name}>
        {label}
      </label>

      <input
        {...rest}
        className={`w-full px-3 py-2 border rounded-md outline-none text-gray-700 dark:text-gray-100
        focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-300
        ${error ? "border-red-500 dark:text-red-800" : "border-gray-300"}`}
      />

      {error && <p className="text-red-500 dark:text-red-800 text-sm mt-1">{error}</p>}
    </div>
  );
}
