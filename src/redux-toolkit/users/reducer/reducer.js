import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUser } from "../api/api";

const initialState = {
  isLoading: false,
  data: null,
  isError: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    // get user
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.data;
      //   console.log(action);
    });

    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("Error", action.payload);
    });

    // Add user

    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log("Add Error", action.payload);
    });
  },
});

export default userSlice.reducer;
