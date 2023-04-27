import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action";
import { Card, CardContent, Button, Typography } from "@material-ui/core";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <Card style={{ width: "70%", margin: "2rem 0", padding: "2rem", background: "#e0e0e0" }}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            Redux Counter
          </Typography>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

            {// here is the useFull code
            }
            <Button variant="contained" color="secondary" onClick={() => dispatch(decNumber(1))}>-</Button>
            <Typography variant="h4" style={{ margin: "0 1rem" }}>{myState}</Typography>
            <Button variant="contained" color="primary" onClick={() => dispatch(incNumber(1))}>+</Button>
            

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
