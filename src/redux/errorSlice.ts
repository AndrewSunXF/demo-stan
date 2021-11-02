import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ErrorMsgState {
  message: string
}

const initialState: ErrorMsgState = {
  message: "",
}

export const errorSlice = createSlice({
  name: 'errorData',
  initialState,
  reducers: {
    setErrorData: (state, action: PayloadAction<string>) => {
        state.message = action.payload
      },
  },
})

export const { setErrorData } = errorSlice.actions

export default errorSlice.reducer