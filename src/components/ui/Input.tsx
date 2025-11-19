import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...rest }: InputProps) {
  return (
    <div className="mb-4 text-left">
      <label className="block mb-1 font-medium text-gray-700" htmlFor={rest.name}>
        {label}
      </label>

      <input
        {...rest}
        className={`w-full px-3 py-2 border rounded-md outline-none text-gray-700 
        focus:ring-2 focus:ring-blue-500
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
