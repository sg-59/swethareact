// import {configureStore} from '@reduxjs/toolkit'
// import loginpage from './userSlice'

// export default configureStore({
//     reducer:{
//         loginfo:loginpage
//     }
// })
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginpage from './userSlice'

const persistConfig = {
  key: 'swethanewProject',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig,loginpage)

export const store = configureStore({
    reducer:{
                loginfo:persistedReducer
            },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

