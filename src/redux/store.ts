import { configureStore } from '@reduxjs/toolkit'
import programReducer from "./programSlice"
import errorReducer from "./errorSlice"
import loadingReducer from "./loadingSlice"

 const store = configureStore({
  reducer: {
    program: programReducer,
    error: errorReducer,
    loading: loadingReducer
  },
})
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch