import React from "react";
import Btn from "../../components/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { clearTimers, startTimer } from "../../redux/slices/timerSlice";
import { log } from "../../redux/selectors";
function Home() {
  const dispatch = useDispatch();
  const btnLog = useSelector(log);
  const handleTimerBtnClick = (button, delay) => {
    dispatch(startTimer(button, delay));
  };
  const handleClearBtnClick = () => {
    dispatch(clearTimers());
  };
  return (
    <Box
      sx={{
        margin: "0 auto",
      }}
    >
      <Grid container spacing={2} margin={"5%"}>
        <Grid item>
          <Btn
            text={"1 sec"}
            onClick={() => {
              handleTimerBtnClick("1", 1);
            }}
          >
            #1
          </Btn>
        </Grid>
        <Grid item>
          <Btn
            text={"2 sec"}
            onClick={() => {
              handleTimerBtnClick("2", 2);
            }}
          />
        </Grid>
        <Grid item>
          <Btn
            text={"3 sec"}
            onClick={() => {
              handleTimerBtnClick("3", 3);
            }}
          />
        </Grid>
        <Grid item>
          <Btn text={"Clear"} onClick={handleClearBtnClick} />
        </Grid>
      </Grid>
      {btnLog.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </Box>
  );
}

export default Home;
