import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    isActive: false,
    log: [],
  },
  reducers: {
    setActive: (state, action) => {
      state.isActive = action.payload;
    },
    addBtnLog: (state, action) => {
      state.log.push(action.payload);
    },
    clearTimers: (state) => {
      state.log = [];
    },
  },
});

const getTimeString = (time) => {
  const hours = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  return `${hours} : ${min} : ${sec}`;
};
export const startTimer = (button, delay) => {
  return (dispatch) => {
    const currentTime = new Date();
    const startTime = getTimeString(currentTime);
    const timerId = setTimeout(() => {
      const currentTimeEnd = new Date();
      const endTime = getTimeString(currentTimeEnd);
      const passed = Math.floor((currentTimeEnd - currentTime) / 1000);
      const logEntry = `Button № ${button}: ${endTime} - ${startTime} (${passed} sec)`;
      dispatch(addBtnLog(logEntry));
      dispatch(setActive(false));
    }, delay * 1000);
    dispatch(setActive(true));
  };
};

export const { addBtnLog, setActive, clearTimers } = timerSlice.actions;
