import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { gitHubApi } from './services/getData'

export const store = configureStore({
    reducer: {
        [gitHubApi.reducerPath]: gitHubApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gitHubApi.middleware),
})

setupListeners(store.dispatch)