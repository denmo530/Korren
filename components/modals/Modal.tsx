import React, { ReactElement, useState, useEffect, useCallback } from "react";
import styles from "@/styles/Modal.module.css";
import { GrClose } from "react-icons/gr";

import Button from "@/components/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const closeModalHandler = useCallback(() => {
    if (disabled) return;
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const submitModalHandler = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  const secondaryActionHandler = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.window}>
          <div
            className={styles.content}
            style={
              showModal
                ? { transform: "translateY(0)", opacity: 1 }
                : { opacity: 0 }
            }
          >
            <div className={styles.temp}>
              <div className={styles.header}>
                <button className={styles.btn} onClick={closeModalHandler}>
                  <GrClose size={20} />
                </button>
                <div className={styles.title}>{title}</div>
              </div>
              <div className={styles.body}>{body}</div>
              <div className={styles.footer}>
                <div className={styles.innerFooter}>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={secondaryActionHandler}
                    />
                  )}

                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={submitModalHandler}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
