import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUserState {
  user: any;
  likedRecipes: unknown[];
}

const initialState: IUserState = {
  user: null,
  likedRecipes: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: IUserState, action: PayloadAction<any>) {
      state.user = action.payload;
    },
  },
});
export const {setUser} = userSlice.actions;
export default userSlice.reducer;
