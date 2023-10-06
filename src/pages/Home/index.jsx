import React from "react";
import Btn from "../../components/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { clearTimers, startTimer } from "../../redux/slices/timerSlice";
import { log, isTimerActive } from "../../redux/selectors";
import { Container } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const btnLog = useSelector(log);
  const isActive = useSelector(isTimerActive);
  const handleTimerBtnClick = (button, delay) => {
    dispatch(startTimer(button, delay));
  };
  const handleClearBtnClick = () => {
    dispatch(clearTimers());
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5%",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 5 }}
        justifyContent="center"
        sx={{ marginBottom: "5%" }}
      >
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
          <Btn text={"Clear"} onClick={handleClearBtnClick}/>
        </Grid>
      </Grid>
      <Box>
        {btnLog.map((item, index) => (
          <Typography key={index}>{item}</Typography>
        ))}
        {isActive === true && <LinearProgress />}
      </Box>
    </Container>
  );
}

export default Home;
