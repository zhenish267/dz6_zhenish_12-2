import {configureStore} from '@reduxjs/toolkit'
import titleSlice from './titleSlice'
import usersSlice from './usersSlice'

export default configureStore({
    reducer: {
        titleReducer: titleSlice,
        usersReducer: usersSlice,
    }
})