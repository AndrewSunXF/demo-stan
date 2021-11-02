import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface ProgramDataState {
  value: StateProperties[]
}

const initialState: ProgramDataState = {
  value: [],
}
interface StateProperties {
  id: number;
  description: string;
  image: string;
  title: string
  year: number;
  rating: string;
  genre: string;
  language: string;
}

export const programSlice = createSlice({
  name: 'programData',
  initialState,
  reducers: {
    setProgramData: (state, action: PayloadAction<Array<StateProperties>>) => {
        state.value = action.payload
      },
  },
})

export const { setProgramData } = programSlice.actions

export default programSlice.reducer