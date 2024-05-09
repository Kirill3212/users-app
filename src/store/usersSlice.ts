import { createSlice } from "@reduxjs/toolkit";
import { State } from "../types";
import { IUser } from "../types";

type InitialState = {
  users: IUser[];
};

const initialState: InitialState = {
  users: [],
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const usernameExist = state.users.find(
        (user) => user.username == action.payload.username
      );

      if (!usernameExist) {
        state.users.push(action.payload);
      }
    },

    removeUser: (state, action) => {
      state.users = [
        ...state.users.filter(
          (user) => user.username !== action.payload.username
        ),
      ];
    },

    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const getUsers = (state: State) => state.users;

export const { addUser, removeUser, clearUsers } = users.actions;
