import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
export const makeApiCall = createAsyncThunk("product/addProduct", async () => {
  const { data } = await axios.get(
    "https://movie-fake-server.herokuapp.com/products"
  );
  return data;
});
const counterSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    sortLowToHigh: (state) => {
      state.products.sort((a, b) => a.price - b.price);
    },
    sortHighToLow: (state) => {
      state.products.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: {
    [makeApiCall.pending]: () => {
      console.log("Pending");
    },
    [makeApiCall.fulfilled]: (state, { payload }) => {
      return { products: payload };
    },
    [makeApiCall.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { sortHighToLow, sortLowToHigh } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
