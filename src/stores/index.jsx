import { configureStore } from '@reduxjs/toolkit'

import auth from './auth.jsx'
import loader from './loader.jsx'

const store = configureStore({
  reducer: {
    auth,
    loader
  },
})

export default store