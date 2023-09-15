import { ReactNode } from "react";

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  loading: boolean;
  children?: ReactNode;
  submitText?: string;
  cancelText?: string;
};

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
  title = "Modal",
  children,
  submitText = "Submit",
  cancelText = "Cancel",
}: ModalProps) => {
  return (
    <>
      <input
        className="modal-state"
        id="modal-1"
        type="checkbox"
        checked={isOpen}
        onChange={onClose}
      />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          <label
            htmlFor="modal-1"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-xl">{title}</h2>
          {/* and here */}
          {children}
          {/* here */}
          <div className="flex gap-3">
            {loading ? (
              <button
                className="btn btn-error btn-block btn-loading"
                onClick={onSubmit}
                disabled
              >
                {submitText}
              </button>
            ) : (
              <button className="btn btn-error btn-block" onClick={onSubmit}>
                {submitText}
              </button>
            )}

            <button className="btn btn-block" onClick={() => onClose()}>
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal };
