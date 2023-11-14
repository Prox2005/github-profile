import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    userData: {
      img: "",
      username: "",
      followers: 0,
      following: 0,
      reposNumber: 0,
      repos: [],
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.value.userData = action.payload;
    },

    addRepos: (state, action) => {
      state.value.userData.repos.push(action.payload);
    },
  },
});

export const { updateUserData, addRepos } = userSlice.actions;

export default userSlice.reducer;
