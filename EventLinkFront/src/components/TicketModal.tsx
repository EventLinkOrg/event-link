import { EventResponseData } from "../redux/events/events.slice";

type TicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  eventData?: EventResponseData;
  loading: boolean;
};

const TicketModal = ({
  isOpen,
  onClose,
  eventData,
  onSubmit,
  loading = false,
}: TicketModalProps) => {
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
          <h2 className="text-xl">Purchase One Ticket</h2>
          <span>
            Event name:
            <input className="input" placeholder={eventData?.title} disabled />
          </span>
          <span>
            Price:
            <input className="input" placeholder={"20"} disabled />
          </span>
          <span>
            Start Date:
            <input
              className="input"
              placeholder={eventData?.startDate}
              disabled
            />
          </span>
          <span>
            End Date:
            <input
              className="input"
              placeholder={eventData?.endDate}
              disabled
            />
          </span>
          <div className="flex gap-3">
            {loading ? (
              <button
                className="btn btn-error btn-block btn-loading"
                onClick={onSubmit}
                disabled
              >
                Purchase
              </button>
            ) : (
              <button className="btn btn-error btn-block" onClick={onSubmit}>
                Purchase
              </button>
            )}

            <button className="btn btn-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { TicketModal };
