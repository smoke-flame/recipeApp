import {createSlice} from '@reduxjs/toolkit';

interface IUserState {
  user: null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
export default userSlice.reducer;
