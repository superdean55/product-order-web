import React from "react";
import Button from "./Button";
import { BackgroundColor, BackgroundColorMap, TextColor, TextColorMap } from "../../styles/colors";
import { PaddingSize, PaddingSizeMap } from "../../styles/dimensions";

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

      <div className={`relative ${BackgroundColorMap[BackgroundColor.CARD]} ${PaddingSizeMap[PaddingSize.MD]} rounded-lg shadow-lg w-11/12 max-w-md animate-fadeIn`}>
        {title && (
          <h2 className={`text-lg font-bold mb-4 ${TextColorMap[TextColor.TEXT]} text-center`}>
            {title}
          </h2>
        )}

        {children}

        <div className="w-full flex flex-row gap-2 pt-4">
          {isAcceptButton && (
            <Button
              onClick={onAccept}
              className="w-full"
            >
              {acceptButtonLabel}
            </Button>
          )}
          {isRejectButton && (
            <Button
              onClick={onReject}
              className="w-full"
            >
              {rejectButtonLabel}
            </Button>
          )}
          {isCloseButton && (
            <Button
              onClick={onClose}
              className="w-full"
            >
              {closeButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
