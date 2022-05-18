import { useEffect, useState } from "react";

export const GameLogic = () => {
  const [time, setTime] = useState(60000);
  const [minute, setMinute] = useState("00");
  const [sec, setSec] = useState("00");
  const [millisec, setMillisec] = useState("00");

  function Timer() {
    setTimeout(() => {
      UpdateTime();
    }, 10);
  }

  function UpdateTime() {
    let newTime = time;
    let newMinute = parseInt(minute);
    let newSec = parseInt(sec);
    let newMilllisec = parseInt(millisec);
    newTime -= 10;
    newMinute = ~~(newTime / 60000);
    newSec = ~~((newTime - minute * 60000) / 1000);
    newMilllisec = newTime % 1000;
    setTime(newTime);
    if (newMinute >= 10) setMinute(newMinute);
    else setMinute("0" + newMinute);
    if (newSec >= 10) setSec(newSec);
    else setSec("0" + newSec);
    if (newMilllisec >= 100) setMillisec(~~(newMilllisec / 10));
    else setMillisec("0" + ~~(newMilllisec / 10));
  }

  useEffect(() => {
    Timer();
  });

  return {
    minute,
    sec,
    millisec,
  };
};
