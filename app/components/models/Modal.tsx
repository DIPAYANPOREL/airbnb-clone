"use client";
import { useState, useEffect, useCallback } from "react";

interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModel, setShowModel] = useState(isOpen);

  useEffect(() => {
    setShowModel(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModel(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handelSecondaryAction = useCallback(() => {
    if (disabled || secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="flex
     justify-center
     items-center
     overflow-x-hidden
     overflow-y-auto
     fixed
     inset-0
     z-50
     outline-none
     focus:outline-none
     bg-neutral-800/70
     "
      >
        <div
          className="
      relative
      w-full
      md:w-4/6
      lg:w-3/6
      xl:w-2/5
      my-6
      mx-auto
      h-full
      lg:h-auto
      md:h-auto"
        >
          {/*Content*/}
          <div
            className="
            translate
            duration-300
            h-full
            ${showmodel ? 'translate-y-0' : 'translate-y-full'}
            ${showmodel ? 'opacity-100' : 'opacity-0'}"
          >
            <div
              className="
            translate
            h-full
            lg:h-auto
            md:h-auto
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-white
            outline-none
            focus:outline-none
            "
            >
              {/* Header */}
              <div
              className="
              flex
              items-center
              p-6
              rounded-t
              justify-center
              relative
              border-b-[1px]             
              "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;