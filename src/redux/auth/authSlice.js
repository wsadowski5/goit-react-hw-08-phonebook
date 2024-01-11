import { createSlice } from '@reduxjs/toolkit';
import { login, register, logout} from './operations';

const initialState = {
  isLoggedIn: false,
  user: { name: null, email: null },
  token: null,
};

function setCommonState(state, action) {
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.token = action.payload.token;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, setCommonState);
    builder.addCase(login.fulfilled, setCommonState);
    builder.addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;
