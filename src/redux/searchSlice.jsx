import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
  },
  reducers: {
    cacheResults: (state, action) => {
      //{i:{},ip:{}}
      state.cache = { ...state.cache, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
