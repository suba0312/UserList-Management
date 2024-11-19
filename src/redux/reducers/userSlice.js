import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    dispatch(setUsers(data.data));
  } catch (error) {
    console.error(error);
  }
};

export default userSlice.reducer;
