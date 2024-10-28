import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateProps {
  usersList: UserProps[],
  isError: boolean
}

const initialState: initialStateProps = {
  usersList: [],
  isError: false,
}

export const gameSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<{usersList: UserProps[], isError: boolean}>) => {
      state.usersList = action.payload.usersList
      state.isError = !!action.payload.isError
    },
  },
})

export const { setUsersList } = gameSlice.actions

export default gameSlice.reducer