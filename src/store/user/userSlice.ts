import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LazyUser} from '../../models';

interface IUserState {
  user: LazyUser | null;
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
    setUser(state: IUserState, action: PayloadAction<LazyUser | null>) {
      state.user = action.payload;
    },
  },
});
export const {setUser} = userSlice.actions;
export default userSlice.reducer;
