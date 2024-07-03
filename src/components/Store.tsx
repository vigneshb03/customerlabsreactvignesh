import { configureStore } from '@reduxjs/toolkit'
import SegmentReducer from './SegmentReducer';

const store = configureStore({
    reducer:{
      segment: SegmentReducer
  }})

export default store;