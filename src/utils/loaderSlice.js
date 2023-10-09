import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    showLoader: false,
  },
  reducers: {
    changeLoaderVisibility: (state, action) => {
      state.showLoader = action.payload;
    },
  },
});

export const { changeLoaderVisibility } = loaderSlice.actions;
export default loaderSlice.reducer;
