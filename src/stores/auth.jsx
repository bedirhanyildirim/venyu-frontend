import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  user: {},
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      state.isLoggedIn = Object.keys(action.payload).length !== 0
    }
  },
})

export const { setUser } = auth.actions
export default auth.reducer