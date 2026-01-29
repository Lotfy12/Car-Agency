import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../components/CarsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;
