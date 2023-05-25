import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  sharedSources: [],
  lastUpdateSharedSources: undefined,
  mySources: [],
  lastUpdateMySources: undefined
}

const sources = createSlice({
  name: 'sources',
  initialState,
  reducers: {
    setSharedSources: (state, action) => {
      state.sharedSources = action.payload
      const now = new Date()
      state.lastUpdateSharedSources = now.toISOString()
    },
    setMySources: (state, action) => {
      state.mySources = action.payload
      const now = new Date()
      state.lastUpdateMySources = now.toISOString()
    },
    addNewSource: (state, action) => {
      state.mySources.push(action.payload)
      const now = new Date()
      state.lastUpdateMySources = now.toISOString()
    }
  },
})

export const { setSharedSources, setMySources, addNewSource } = sources.actions
export default sources.reducer