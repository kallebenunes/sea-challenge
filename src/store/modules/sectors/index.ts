import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: any[]
}

const initialState = { value: [] } as CounterState

const sectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
    setSectors(state, action) {
      state.value = [...action.payload]
    },
  },
})

export const { setSectors } = sectorsSlice.actions
export default sectorsSlice.reducer
export const  fetchSectors = () => async (dispatch: any) => {
  
}
