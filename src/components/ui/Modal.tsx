import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md animate-fadeIn">
        {title && (
          <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white text-center">
            {title}
          </h2>
        )}

        {children}

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-500 dark:hover:bg-gray-500"
        >
          Close
        </button>
      </div>
    </div>
  );
}
