import { configureStore } from "@reduxjs/toolkit"

import auth from './auth.jsx'
import loader from './loader.jsx'
import sources from './sources.jsx'

const store = configureStore({
  reducer: {
    auth,
    loader,
    sources
  },
})

export default store