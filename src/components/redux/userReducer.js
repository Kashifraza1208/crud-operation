import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data/UserData";

const UserSlice = createSlice({
  name: "users",
  initialState: {
    users: userList,
  },

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedUser = state.users.find((user) => user.id == id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedUser = state.users.find((user) => user.id == id);
      if (updatedUser) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = UserSlice.actions;
export default UserSlice.reducer;
