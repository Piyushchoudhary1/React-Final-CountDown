import { forwardRef, useImperativeHandle, useRef } from "react";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime },
  ref
) {
  const userLost = remainingTime <= 0;
  const formattedRemainingtime = (remainingTime / 1000).toFixed(2);
  return (
    <dialog ref={ref} className="result-modal" open>
      {userLost && <h2>You Lost</h2>}

      <p>
        The Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with <strong>{formattedRemainingtime} Seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
