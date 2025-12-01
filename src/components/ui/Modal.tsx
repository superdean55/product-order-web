import React from "react";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  onAccept?: () => void;
  acceptButtonLabel?: string;
  onReject?: () => void;
  rejectButtonLabel?: string;
  onClose?: () => void;
  closeButtonLabel?: string;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onAccept,
  acceptButtonLabel,
  onReject,
  rejectButtonLabel,
  onClose,
  closeButtonLabel,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;
  const isAcceptButton =
    acceptButtonLabel !== undefined && onAccept !== undefined;
  const isRejectButton =
    rejectButtonLabel !== undefined && onReject !== undefined;
  const isCloseButton = closeButtonLabel !== undefined && onClose !== undefined;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md animate-fadeIn">
        {title && (
          <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white text-center">
            {title}
          </h2>
        )}

        {children}

        <div className="w-full flex flex-row gap-2 pt-4">
          {isAcceptButton && (
            <Button
              onClick={onAccept}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-500 dark:hover:bg-gray-500"
            >
              {acceptButtonLabel}
            </Button>
          )}
          {isRejectButton && (
            <Button
              onClick={onReject}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-500 dark:hover:bg-gray-500"
            >
              {rejectButtonLabel}
            </Button>
          )}
          {isCloseButton && (
            <Button
              onClick={onClose}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md hover:bg-gray-500 dark:hover:bg-gray-500"
            >
              {closeButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
