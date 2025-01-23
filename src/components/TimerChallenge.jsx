import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  //  const [timerStarted, setTimeStarted] = useState(false);
  //const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setRemainigTime] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setRemainigTime(targetTime * 1000);
    dialog.current.showModal();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainigTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.showModal();
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
